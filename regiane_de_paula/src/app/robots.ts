import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.rp-psicologia.com.br/sitemap.xml',
    host: 'https://www.rp-psicologia.com.br',
  }
}
