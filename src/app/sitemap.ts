import type { MetadataRoute } from 'next'

const baseURL = 'https://reprotec.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${baseURL}/servicos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9
    },
    {
      url: `${baseURL}/trabalhe-conosco`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: `${baseURL}/contato`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: `${baseURL}/creditos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: `${baseURL}/politica-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: `${baseURL}/https://www.sev7tech.com/pt`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    }
  ]
}
