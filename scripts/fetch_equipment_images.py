#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
下载并处理保健品生产线设备宣传图(4:3, <500KB)。

来源: Pexels API(免费、可商用)。
需在环境变量 PEXELS_API_KEY 或 .env 中配置 key。

输出: public/images/manufacturing/equip-1.jpg ... equip-4.jpg
对应 manufacturing.vue 的 4 类设备:
  1. HPLC / 分析仪器 (HPLC instrument)
  2. 胶囊填充机 (Encapsulation / capsule filling machine)
  3. 不锈钢混合罐 (Blending / mixing tank)
  4. 药品包装线 (Packaging line)
"""
import os
import sys
import time
import requests
from PIL import Image, ImageOps

API_KEY = os.environ.get("PEXELS_API_KEY", "").strip()
if not API_KEY:
    # 尝试从 .env 读取
    env_path = os.path.join(os.path.dirname(__file__), "..", ".env")
    if os.path.exists(env_path):
        with open(env_path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("PEXELS_API_KEY="):
                    API_KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
                    break

if not API_KEY:
    sys.exit("ERROR: 未找到 PEXELS_API_KEY。请在 .env 中设置或在环境变量中提供。\n"
             "获取: https://www.pexels.com/api/  (免费注册)")

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
OUT_DIR = os.path.join(ROOT, "public", "images", "manufacturing")
os.makedirs(OUT_DIR, exist_ok=True)

TARGET_W, TARGET_H = 1200, 900   # 4:3
MAX_BYTES = 500 * 1024           # 500KB

# (输出文件名, 检索词(英文), 备选检索词)
JOBS = [
    ("equip-1.jpg", "laboratory machine", ["laboratory equipment", "chemistry laboratory instrument", "science lab machine"]),
    ("equip-2.jpg", "pharmaceutical machine", ["capsule machine", "pill production", "pharmacy manufacturing"]),
    ("equip-3.jpg", "industrial machine factory", ["factory machine stainless steel", "manufacturing equipment", "production line machine"]),
    ("equip-4.jpg", "factory production line", ["manufacturing conveyor", "packaging conveyor belt", "assembly line factory"]),
]

HEADERS = {"Authorization": API_KEY}
SEARCH_URL = "https://api.pexels.com/v1/search"


def search_best(query, orientation="landscape", preview=False):
    """返回最合适的横版图片。preview=True 时打印候选清单供人工核对。"""
    r = requests.get(SEARCH_URL, headers=HEADERS,
                     params={"query": query, "orientation": orientation, "per_page": 40, "size": "large"},
                     timeout=30)
    r.raise_for_status()
    photos = r.json().get("photos", [])

    # 关键词加分:机器/设备相关词出现越多越好
    GOOD = ["machine", "equipment", "instrument", "laboratory", "industry",
            "factory", "production", "manufactur", "pharma", "chemical", "tank", "conveyor"]

    def score(p):
        w, h = p["width"], p["height"]
        ratio = w / h
        text = (p.get("alt") or "").lower()
        good_hits = sum(1 for g in GOOD if g in text)
        # 越接近 4:3、越大、关键词命中越多 -> 分数越低(越优)
        return (abs(ratio - 4 / 3) * 2) - (w / 4000) - good_hits

    scored = sorted(photos, key=score)
    if preview:
        print(f"  -- candidates for '{query}' --")
        for p in scored[:8]:
            print(f"     id={p['id']} {p['width']}x{p['height']} alt={p.get('alt')}")
        return None, None, None
    for p in scored:
        url = p["src"].get("large2x") or p["src"].get("large") or p["src"].get("original")
        return url, p.get("photographer"), p.get("url")
    return None, None, None


def download(url, tmp_path):
    r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=60)
    r.raise_for_status()
    with open(tmp_path, "wb") as f:
        f.write(r.content)


def fit_4_3_and_compress(src_path, out_path):
    """缩放并中心裁剪到 1200x900,迭代压缩 JPEG 到 <500KB。"""
    im = Image.open(src_path)
    im = ImageOps.exif_transpose(im).convert("RGB")
    im = ImageOps.fit(im, (TARGET_W, TARGET_H), method=Image.LANCZOS, centering=(0.5, 0.5))
    # 迭代降低 quality 直到 <500KB
    q = 92
    buf = None
    while q >= 40:
        buf = im.tobytes() if False else None  # placeholder
        im.save(out_path, "JPEG", quality=q, optimize=True, progressive=True)
        if os.path.getsize(out_path) <= MAX_BYTES:
            return os.path.getsize(out_path)
        q -= 4
    return os.path.getsize(out_path)


def main():
    preview = "--preview" in sys.argv
    for out_name, query, alts in JOBS:
        print(f"\n=== {out_name}  query='{query}' ===")
        url = photographer = page = None
        for q in [query] + alts:
            u, ph, pg = search_best(q, preview=preview)
            if preview:
                continue
            if u:
                url, photographer, page = u, ph, pg
                print(f"  hit: '{q}' -> {url}  (by {photographer})")
                break
            time.sleep(0.3)
        if not url:
            print("  !! 未找到合适图片,跳过")
            continue
        tmp = os.path.join(OUT_DIR, "_tmp_src.jpg")
        try:
            download(url, tmp)
            out_path = os.path.join(OUT_DIR, out_name)
            size = fit_4_3_and_compress(tmp, out_path)
            print(f"  saved {out_path}  {TARGET_W}x{TARGET_H}  {size/1024:.0f}KB")
            # 记录署名(合规:Pexels 要求标注出处)
            credit_path = os.path.join(OUT_DIR, "_credits.txt")
            with open(credit_path, "a", encoding="utf-8") as f:
                f.write(f"{out_name}: Photo by {photographer} on Pexels - {page}\n")
        except Exception as e:
            print(f"  !! 出错: {e}")
        finally:
            if os.path.exists(tmp):
                os.remove(tmp)
        time.sleep(0.5)


if __name__ == "__main__":
    main()
