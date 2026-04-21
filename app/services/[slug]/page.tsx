import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesDetail } from '@/data/servicesDetail';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesDetail.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetail.find(s => s.slug === slug);
  if (!service) return {};

  const baseUrl = process.env.APP_URL || 'https://akeru.agency';
  const title = service.title.en;
  const description = service.tagline.en;
  const url = `${baseUrl}/services/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: { title, description },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesDetail.find(s => s.slug === slug);
  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
