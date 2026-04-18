'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button/Button';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ClosingCTA.module.css';

import Link from 'next/link';

export default function ClosingCTA() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.section} id="contact">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.textDark}>{t.closingCta.text1}</span>
        <br />
        <span className={styles.textGray}>{t.closingCta.text2}</span>
      </motion.h2>

      <motion.div
        className={styles.action}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/book" style={{ textDecoration: 'none' }}>
          <Button variant="primary" className={styles.ctaBtn}>
            {t.closingCta.btn}
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
