import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { casesDetail } from '@/data/casesDetail';
import CaseDetailClient from './CaseDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return casesDetail.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseData = casesDetail.find(c => c.slug === slug);
  if (!caseData) return {};

  const baseUrl = process.env.APP_URL || 'https://akeru.agency';
  const title = `${caseData.title.en} — Case Study`;
  const description = caseData.tagline.en;
  const url = `${baseUrl}/cases/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
    twitter: { title, description },
  };
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const caseData = casesDetail.find(c => c.slug === slug);
  if (!caseData) notFound();

  return <CaseDetailClient caseData={caseData} />;
}
