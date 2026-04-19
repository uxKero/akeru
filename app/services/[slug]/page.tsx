import { notFound } from 'next/navigation';
import { servicesDetail } from '@/data/servicesDetail';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesDetail.map(s => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesDetail.find(s => s.slug === slug);
  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
