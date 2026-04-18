'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WorkModels.module.css';
import WorkModelCard from '@/components/ui/WorkModelCard/WorkModelCard';

export default function WorkModels() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="process">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
      >
        {t.workModels.title}
      </motion.h2>

      <div className={styles.grid}>
        {t.workModels.models.map((model, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
          >
            <WorkModelCard model={model} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
