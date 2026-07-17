import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://regianepsicologa.com.br/sitemap.xml',
    host: 'https://regianepsicologa.com.br',
  }
}
