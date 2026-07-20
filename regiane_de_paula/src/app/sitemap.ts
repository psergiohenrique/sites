import type { MetadataRoute } from 'next'

const BASE = 'https://regianepsicologa.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/quem-sou-eu`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/servicos`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/politica-de-privacidade`,
      lastModified: new Date('2026-07-20'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
