import type { MetadataRoute } from 'next';
import { caseStudyPaths, siteUrl } from './site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ...caseStudyPaths];
  return paths.map((path) => ({
    url: path === '/' ? `${siteUrl}/` : `${siteUrl}${path}/`,
    lastModified: new Date('2026-11-25'),
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
