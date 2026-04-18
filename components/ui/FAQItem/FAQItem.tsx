'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQItem.module.css';
import clsx from 'clsx';

interface FAQEntry {
  question: string;
  answer: string;
}

interface FAQItemProps {
  entry: FAQEntry;
}

export default function FAQItem({ entry }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={clsx(styles.item, isOpen && styles.open)} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.header}>
        <h3 className={styles.question}>{entry.question}</h3>
        <div className={styles.icon}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={styles.answerWrapper}
          >
            <div className={styles.answer}>
              {entry.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
