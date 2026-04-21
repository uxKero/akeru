import type { MetadataRoute } from 'next';
import { servicesDetail } from '@/data/servicesDetail';
import { casesDetail } from '@/data/casesDetail';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://akeru.agency';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesDetail.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const caseRoutes: MetadataRoute.Sitemap = casesDetail.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes];
}
