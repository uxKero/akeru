'use client';

import type { CaseDetail } from '@/data/casesDetail';
import CaseDetailView from '@/components/sections/CaseDetail/CaseDetailView';

export default function CaseDetailClient({ caseData }: { caseData: CaseDetail }) {
  return <CaseDetailView caseData={caseData} />;
}
