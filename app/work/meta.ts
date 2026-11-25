import type { Metadata } from 'next';
import { siteUrl } from '../site';

export function studyMeta(slug: string, title: string, summary: string): Metadata {
  const path = `/work/${slug}/`;
  const fullTitle = `${title} · Kannan Sekar`;
  return {
    title,
    description: summary,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      type: 'article',
      title: fullTitle,
      description: summary,
      url: `${siteUrl}${path}`,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'Kannan Sekar, software engineer and physics researcher',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: summary,
      images: ['/og.png'],
    },
  };
}
