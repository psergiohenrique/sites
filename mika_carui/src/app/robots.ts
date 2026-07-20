import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mikacarui.com/sitemap.xml',
    host: 'https://mikacarui.com',
  }
}
