#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
下载并处理 5 个一级页面 Hero 背景图(横版 1920x700, <300KB)。

来源: Pexels API(免费、可商用)。
需在环境变量 PEXELS_API_KEY 或 .env 中配置 key。

输出: public/images/<page>/hero.jpg
页面:
  about        关于我们      -  企业园区/办公大楼外景
  products     产品          -  多种剂型保健品摆放
  services     服务          -  工厂车间内部生产线
  how-it-works 合作流程      -  商务会议/协作场景
  contact      联系我们      -  现代办公室接待区
"""
import os
import sys
import time
import requests
from PIL import Image, ImageOps

API_KEY = os.environ.get("PEXELS_API_KEY", "").strip()
if not API_KEY:
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
TARGET_W, TARGET_H = 1920, 700   # 横版宽幅
MAX_BYTES = 300 * 1024            # 300KB

# (输出目录, 主检索词, 备选检索词列表)
JOBS = [
    ("about", "modern industrial park building",
     ["corporate headquarters exterior", "office building glass facade",
      "industrial park aerial view", "modern factory building exterior"]),
    ("products", "supplement capsules pills",
     ["vitamin pills colorful", "pharmaceutical capsules macro",
      "dietary supplements arrangement", "health supplements bottles"]),
    ("services", "factory production line interior",
     ["modern manufacturing facility", "pharmaceutical factory interior",
      "cleanroom production line", "industrial machinery factory"]),
    ("how-it-works", "business meeting handshake",
     ["business collaboration office", "team meeting discussion",
      "professional partnership agreement", "consultation meeting business"]),
    ("contact", "modern office reception",
     ["corporate reception desk", "office lobby modern",
      "customer service office", "business reception area"]),
]

HEADERS = {"Authorization": API_KEY}
SEARCH_URL = "https://api.pexels.com/v1/search"


def search_best(query, orientation="landscape", preview=False):
    """返回最合适的横版图片。preview=True 时打印候选清单供人工核对。"""
    r = requests.get(SEARCH_URL, headers=HEADERS,
                     params={"query": query, "orientation": orientation,
                             "per_page": 40, "size": "large"},
                     timeout=30)
    r.raise_for_status()
    photos = r.json().get("photos", [])

    # 关键词加分:越宽越好(>=1920),尽量靠近 2.74:1 宽高比
    GOOD = ["building", "office", "factory", "production", "machine",
            "capsule", "pill", "supplement", "meeting", "business",
            "reception", "industrial", "corporate", "laboratory"]

    def score(p):
        w, h = p["width"], p["height"]
        ratio = w / h
        text = (p.get("alt") or "").lower()
        good_hits = sum(1 for g in GOOD if g in text)
        # 越接近 2.74:1、越宽、关键词命中越多 -> 分数越低(越优)
        # 偏好宽幅,惩罚太窄或太正方形的图
        ratio_penalty = abs(ratio - 2.74) * 1.5
        width_bonus = -(w / 4000)
        return ratio_penalty + width_bonus - good_hits

    scored = sorted(photos, key=score)
    if preview:
        print(f"  -- candidates for '{query}' --")
        for p in scored[:8]:
            print(f"     id={p['id']} {p['width']}x{p['height']} "
                  f"ratio={p['width']/p['height']:.2f} alt={p.get('alt')}")
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


def fit_wide_and_compress(src_path, out_path):
    """缩放并中心裁剪到 1920x700,迭代压缩 JPEG 到 <300KB。"""
    im = Image.open(src_path)
    im = ImageOps.exif_transpose(im).convert("RGB")
    # 用 fit 做中心裁剪到目标比例(会自动缩放)
    im = ImageOps.fit(im, (TARGET_W, TARGET_H),
                      method=Image.LANCZOS, centering=(0.5, 0.5))
    # 迭代降低 quality 直到 <300KB
    q = 88
    while q >= 30:
        im.save(out_path, "JPEG", quality=q, optimize=True, progressive=True)
        if os.path.getsize(out_path) <= MAX_BYTES:
            return os.path.getsize(out_path)
        q -= 6
    return os.path.getsize(out_path)


def main():
    preview = "--preview" in sys.argv
    for folder, query, alts in JOBS:
        out_dir = os.path.join(ROOT, "public", "images", folder)
        os.makedirs(out_dir, exist_ok=True)
        out_name = "hero.jpg"
        print(f"\n=== {folder}/{out_name}  query='{query}' ===")

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

        tmp = os.path.join(out_dir, "_tmp_src.jpg")
        try:
            download(url, tmp)
            out_path = os.path.join(out_dir, out_name)
            size = fit_wide_and_compress(tmp, out_path)
            print(f"  saved {out_path}  {TARGET_W}x{TARGET_H}  {size/1024:.0f}KB")
            # 记录署名(合规:Pexels 要求标注出处)
            credit_path = os.path.join(ROOT, "public", "images",
                                        folder, "_credits.txt")
            with open(credit_path, "a", encoding="utf-8") as f:
                f.write(f"hero.jpg: Photo by {photographer} on Pexels - {page}\n")
        except Exception as e:
            print(f"  !! 出错: {e}")
        finally:
            if os.path.exists(tmp):
                os.remove(tmp)
        time.sleep(0.5)


if __name__ == "__main__":
    main()
