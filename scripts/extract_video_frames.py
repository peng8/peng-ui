#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 banner 视频按指定时间戳提取 9 帧并压缩到 <500KB。

源: E:\image\1767937023367-banner.mp4
输出: public/images/banner-frames/frame-<NN>s.jpg
"""
import os
import cv2
from PIL import Image, ImageOps

SRC = r"E:\image\1767937023367-banner.mp4"
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                       "public", "images", "banner-frames")
TIMES = [1, 2, 4, 5, 7, 9, 10, 12, 13]   # 秒
FPS = 30
MAX_BYTES = 500 * 1024

os.makedirs(OUT_DIR, exist_ok=True)

cap = cv2.VideoCapture(SRC)
if not cap.isOpened():
    raise SystemExit(f"无法打开视频: {SRC}")

for t in TIMES:
    frame_no = int(t * FPS)
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_no)
    ok, frame = cap.read()
    if not ok:
        print(f"  FAIL  {t}s  (frame {frame_no} 读取失败)")
        continue

    # cv2 读出来是 BGR,转成 RGB 后用 PIL 压缩
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    im = Image.fromarray(rgb, mode="RGB")
    im = ImageOps.exif_transpose(im)

    out_path = os.path.join(OUT_DIR, f"frame-{t:02d}s.jpg")
    q = 90
    while q >= 30:
        im.save(out_path, "JPEG", quality=q, optimize=True, progressive=True)
        sz = os.path.getsize(out_path)
        if sz <= MAX_BYTES:
            break
        q -= 6
    final_sz = os.path.getsize(out_path)
    print(f"  OK    {t:02d}s  (frame {frame_no})  {im.width}x{im.height}  {final_sz/1024:.0f}KB  q={q}")

cap.release()
print(f"\n输出目录: {OUT_DIR}")
