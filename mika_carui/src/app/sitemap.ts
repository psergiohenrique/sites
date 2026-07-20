import type { MetadataRoute } from 'next'

const BASE = 'https://mikacarui.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
