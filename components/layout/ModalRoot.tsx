'use client';

import BookingModal from '@/components/ui/BookingModal/BookingModal';
import AgentFinderModal from '@/components/ui/AgentFinderModal/AgentFinderModal';

export default function ModalRoot() {
  return (
    <>
      <BookingModal />
      <AgentFinderModal />
    </>
  );
}
