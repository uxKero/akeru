'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './CapabilitiesGrid.module.css';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import CapabilityCard from '@/components/ui/CapabilityCard/CapabilityCard';

export default function CapabilitiesGrid() {
  const { t } = useLanguage();
  
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className={styles.section}>
      <SectionLabel variant="light" className={styles.label}>
        {t.capabilitiesGrid.label}
      </SectionLabel>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {t.capabilitiesGrid.columns.map((column, index) => (
          <CapabilityCard key={index} title={column.title} skills={column.skills} />
        ))}
      </motion.div>
    </section>
  );
}
