#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
下载 services 页面两个合作模式卡片图(16:9, <200KB)。

- white-label  白标定制  -  品牌标签的补充剂瓶排列
- odm          ODM 定制   -  实验室研发/配方定制场景

输出: public/images/services/<key>.jpg
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
    sys.exit("ERROR: 未找到 PEXELS_API_KEY")

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
TARGET_W, TARGET_H = 1600, 900   # 16:9
MAX_BYTES = 200 * 1024

# (输出文件名, 主检索词, 备选检索词)
JOBS = [
    ("white-label", "supplement bottles with label",
     ["white supplement bottle brand", "vitamin bottle packaging",
      "private label supplement bottle", "branded supplement bottles row"]),
    ("odm", "laboratory scientist formulation research",
     ["lab researcher test tube", "pharmaceutical laboratory scientist",
      "chemist research formulation", "scientist holding capsule lab"]),
]

HEADERS = {"Authorization": API_KEY}
SEARCH_URL = "https://api.pexels.com/v1/search"

GOOD = ["bottle", "label", "supplement", "vitamin", "brand",
        "lab", "scientist", "research", "formulation", "capsule",
        "pharmaceutical", "chemist", "test"]


def search_best(query, orientation="landscape"):
    r = requests.get(SEARCH_URL, headers=HEADERS,
                     params={"query": query, "orientation": orientation,
                             "per_page": 40, "size": "large"},
                     timeout=30)
    r.raise_for_status()
    photos = r.json().get("photos", [])

    def score(p):
        w, h = p["width"], p["height"]
        ratio = w / h
        text = (p.get("alt") or "").lower()
        good_hits = sum(1 for g in GOOD if g in text)
        # 偏好宽幅(接近 16:9)、关键词命中
        return abs(ratio - 1.78) * 1.2 - good_hits

    for p in sorted(photos, key=score):
        url = p["src"].get("large2x") or p["src"].get("large") or p["src"].get("original")
        return url, p.get("photographer")
    return None, None


def fit_and_compress(src_path, out_path):
    im = Image.open(src_path)
    im = ImageOps.exif_transpose(im).convert("RGB")
    im = ImageOps.fit(im, (TARGET_W, TARGET_H),
                      method=Image.LANCZOS, centering=(0.5, 0.5))
    q = 88
    while q >= 30:
        im.save(out_path, "JPEG", quality=q, optimize=True, progressive=True)
        if os.path.getsize(out_path) <= MAX_BYTES:
            return os.path.getsize(out_path)
        q -= 6
    return os.path.getsize(out_path)


def main():
    out_dir = os.path.join(ROOT, "public", "images", "services")
    os.makedirs(out_dir, exist_ok=True)

    for name, query, alts in JOBS:
        print(f"\n=== services/{name}.jpg  query='{query}' ===")
        url = photographer = None
        for q in [query] + alts:
            u, ph = search_best(q)
            if u:
                url, photographer = u, ph
                print(f"  hit: '{q}' -> {url}  (by {photographer})")
                break
            time.sleep(0.3)
        if not url:
            print("  !! 未找到合适图片,跳过")
            continue

        tmp = os.path.join(out_dir, "_tmp_src.jpg")
        try:
            r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=60)
            r.raise_for_status()
            with open(tmp, "wb") as f:
                f.write(r.content)
            out_path = os.path.join(out_dir, f"{name}.jpg")
            size = fit_and_compress(tmp, out_path)
            print(f"  saved {out_path}  {TARGET_W}x{TARGET_H}  {size/1024:.0f}KB")
        except Exception as e:
            print(f"  !! 出错: {e}")
        finally:
            if os.path.exists(tmp):
                os.remove(tmp)
        time.sleep(0.5)


if __name__ == "__main__":
    main()
