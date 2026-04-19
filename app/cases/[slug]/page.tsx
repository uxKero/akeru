import { notFound } from 'next/navigation';
import { casesDetail } from '@/data/casesDetail';
import CaseDetailClient from './CaseDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return casesDetail.map(c => ({ slug: c.slug }));
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;
  const caseData = casesDetail.find(c => c.slug === slug);
  if (!caseData) notFound();

  return <CaseDetailClient caseData={caseData} />;
}
