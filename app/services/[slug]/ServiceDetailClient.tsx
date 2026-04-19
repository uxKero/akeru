'use client';

import type { ServiceDetail } from '@/data/servicesDetail';
import ServiceDetailView from '@/components/sections/ServiceDetail/ServiceDetailView';

export default function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  return <ServiceDetailView service={service} />;
}
