import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/not-found/'
    },
    sitemap: 'https://reprotec.com.br/sitemap.xml'
  }
}
