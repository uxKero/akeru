'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './CapabilitiesDiagram.module.css';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';

export default function CapabilitiesDiagram() {
  const { t } = useLanguage();

  const drawOptions: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const lineDrawOptions: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const pillVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.section}>
      <div className={styles.labels}>
        <SectionLabel variant="light" className={styles.labelLeft}>{t.diagram.labelLeft}</SectionLabel>
        <SectionLabel variant="light" className={styles.labelRight}>{t.diagram.labelRight}</SectionLabel>
      </div>

      <RevealWrapper className={styles.container}>
        <svg
          className={styles.svg}
          viewBox="0 0 1000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Borde exterior */}
          <motion.rect
            x="50"
            y="20"
            width="900"
            height="360"
            rx="24"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            strokeDasharray="6 4"
            variants={drawOptions}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          />
          
          {/* Corchetes decorativos */}
          <motion.path
            d="M 40 180 C 20 180, 20 200, 20 200 C 20 200, 20 220, 40 220"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            variants={drawOptions}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.path
            d="M 960 180 C 980 180, 980 200, 980 200 C 980 200, 980 220, 960 220"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            variants={drawOptions}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Líneas conectoras (árbol) */}
          <motion.path
            d="M 250 120 L 250 180 L 500 180 L 500 240 M 500 120 L 500 180 M 750 120 L 750 180 L 500 180 M 250 280 L 250 240 L 500 240 L 750 240 L 750 280 M 500 280 L 500 240"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
            strokeDasharray="6 4"
            variants={lineDrawOptions}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

        </svg>

        <div className={styles.contentOverlay}>
          <motion.div 
            className={styles.rowTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
          >
            {t.diagram.top.map((lbl, idx) => (
              <motion.div key={idx} variants={pillVariants} className={styles.pillLarge}>{lbl}</motion.div>
            ))}
          </motion.div>

          <motion.div 
            className={styles.rowBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 1.1 }}
          >
            {t.diagram.bottom.map((lbl, idx) => (
              <motion.div key={idx} variants={pillVariants} className={styles.pillMedium}>{lbl}</motion.div>
            ))}
          </motion.div>
        </div>
      </RevealWrapper>
    </section>
  );
}

