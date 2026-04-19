'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './RecentCases.module.css';
import { useLanguage } from '@/context/LanguageContext';

const CASE_SLUGS = [
  'real-estate-prequalification',
  'technical-triage-24-7',
  'whatsapp-onboarding',
];

export default function RecentCases() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="cases">
      <h2 className={styles.title}>{t.recentCases.title}</h2>

      <div className={styles.grid}>
        {t.recentCases.cases.map((c, index) => (
          <Link
            key={index}
            href={`/cases/${CASE_SLUGS[index]}`}
            style={{ textDecoration: 'none', display: 'contents' }}
          >
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder} />
              </div>

              <div className={styles.content}>
                <span className={styles.tag}>{c.tag}</span>
                <h3 className={styles.caseTitle}>{c.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
