// 关于我们页 —— 右侧视频矩阵
// 视频源托管在 img.mildy-health.com CDN，直接外链播放（无需 IPX 预渲染）
export interface PromoVideo {
  src: string
  /** i18n key 前缀，取 about.gallery.N.caption 作为标题 */
  captionKey: string
}

export const promoVideos: PromoVideo[] = [
  { src: 'https://img.mildy-health.com/products/video/video0_web.mp4?v=new', captionKey: 'about.gallery.1.caption' },
  { src: 'https://img.mildy-health.com/products/video/video1_web.mp4?v=new', captionKey: 'about.gallery.2.caption' },
  { src: 'https://img.mildy-health.com/products/video/video2_web.mp4?v=new', captionKey: 'about.gallery.3.caption' },
  { src: 'https://img.mildy-health.com/products/video/video3_web.mp4?v=new', captionKey: 'about.gallery.4.caption' }
]
