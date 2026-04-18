'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WhyAkeru.module.css';

export default function WhyAkeru() {
  const { t } = useLanguage();
  const tm = t.whyAkeru;

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{tm.title}</h2>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <motion.div variants={cardVariants} className={styles.card}>
          <div className={styles.visualArea}>
            <div className={styles.placeholderStripe} />
            <div className={styles.placeholderStripe} style={{ width: '60%' }} />
          </div>
          <h3 className={styles.cardTitle}>{tm.cards[0].title}</h3>
          <p className={styles.cardDesc}>
            {tm.cards[0].desc}
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className={styles.card}>
          <div className={styles.visualArea}>
            <div className={styles.placeholderCircle} />
          </div>
          <h3 className={styles.cardTitle}>{tm.cards[1].title}</h3>
          <p className={styles.cardDesc}>
            {tm.cards[1].desc}
          </p>
        </motion.div>

        <motion.div variants={cardVariants} className={styles.card}>
          <div className={styles.visualArea}>
            <div className={styles.placeholderGrid}>
              <div /><div /><div /><div />
            </div>
          </div>
          <h3 className={styles.cardTitle}>
            {tm.cards[2].title}
          </h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
