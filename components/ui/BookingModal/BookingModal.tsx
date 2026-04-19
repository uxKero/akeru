'use client';

import { useModal } from '@/context/ModalContext';
import Modal from '@/components/ui/Modal/Modal';
import BookingForm from '@/components/sections/BookingForm/BookingForm';

export default function BookingModal() {
  const { activeModal, closeModal } = useModal();

  return (
    <Modal isOpen={activeModal === 'booking'} onClose={closeModal} maxWidth={760}>
      <BookingForm isModal onClose={closeModal} />
    </Modal>
  );
}
