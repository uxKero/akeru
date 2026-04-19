'use client';

import { motion, type Variants } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { useModal } from '@/context/ModalContext';
import { useLanguage } from '@/context/LanguageContext';
import type { CaseDetail } from '@/data/casesDetail';
import styles from './CaseDetailView.module.css';

interface CaseDetailViewProps {
  caseData: CaseDetail;
}

export default function CaseDetailView({ caseData }: CaseDetailViewProps) {
  const { language } = useLanguage();
  const { openModal } = useModal();
  const lang = language === 'es' ? 'es' : 'en';

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <motion.div
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className={styles.tagRow}>
          <span className={styles.industryTag}>{caseData.industry[lang]}</span>
          <span className={styles.categoryTag}>{caseData.tag[lang]}</span>
        </motion.div>
        <motion.h1 variants={fadeUp} className={styles.title}>{caseData.title[lang]}</motion.h1>
        <motion.p variants={fadeUp} className={styles.tagline}>{caseData.tagline[lang]}</motion.p>
      </motion.div>

      {/* Results */}
      <div className={styles.results}>
        {caseData.results.map((r, i) => (
          <div key={i} className={styles.resultItem}>
            <div className={styles.resultValue}>{r.value}</div>
            <div className={styles.resultLabel}>{r.label[lang]}</div>
          </div>
        ))}
      </div>

      {/* Challenge */}
      <motion.div
        className={styles.challengeSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p variants={fadeUp} className={styles.sectionLabel}>
          {lang === 'es' ? 'El desafío' : 'The challenge'}
        </motion.p>
        <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
          {lang === 'es' ? '¿Cuál era el problema?' : 'What was the problem?'}
        </motion.h2>
        <motion.p variants={fadeUp} className={styles.challengeIntro}>
          {caseData.challenge.intro[lang]}
        </motion.p>
        <ul className={styles.challengePoints}>
          {caseData.challenge.points[lang].map((point, i) => (
            <motion.li key={i} variants={fadeUp} className={styles.challengePoint}>
              <span className={styles.challengeIcon}>↳</span>
              <span className={styles.challengeText}>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Solution */}
      <div className={styles.solutionSection}>
        <p className={styles.sectionLabel}>
          {lang === 'es' ? 'La solución' : 'The solution'}
        </p>
        <h2 className={styles.sectionTitle}>
          {lang === 'es' ? 'Qué construimos' : 'What we built'}
        </h2>
        <p className={styles.solutionIntro}>{caseData.solution.intro[lang]}</p>
        <div className={styles.solutionSteps}>
          {caseData.solution.steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.solutionStep}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>{step.title[lang]}</div>
                <div className={styles.stepDesc}>{step.desc[lang]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <motion.div
        className={styles.quoteSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.quoteInner}>
          <p className={styles.quoteText}>{caseData.quote.text[lang]}</p>
          <div className={styles.quoteAuthor}>
            <span className={styles.authorName}>{caseData.quote.author}</span>
            <span className={styles.authorMeta}>
              {caseData.quote.role[lang]} · {caseData.quote.company}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Meta */}
      <div className={styles.metaSection}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>{lang === 'es' ? 'Tiempo de despliegue' : 'Deployment time'}</span>
          <span className={styles.metaValue}>{caseData.timeline[lang]}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>{lang === 'es' ? 'Modelo de trabajo' : 'Work model'}</span>
          <span className={styles.metaValue}>{caseData.workModel[lang]}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>{lang === 'es' ? 'Stack utilizado' : 'Stack used'}</span>
          <div className={styles.stackList}>
            {caseData.stack.map((s, i) => (
              <span key={i} className={styles.stackBadge}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          {lang === 'es' ? '¿Querés un resultado similar?' : 'Want a similar result?'}
        </h2>
        <p className={styles.ctaSubtitle}>
          {lang === 'es'
            ? 'Contanos tu caso. En una llamada de 30 minutos te decimos qué agente tiene sentido para vos.'
            : "Tell us your case. In a 30-minute call we'll tell you exactly which agent makes sense for you."}
        </p>
        <button className={styles.ctaBtn} onClick={() => openModal('booking')}>
          {lang === 'es' ? 'Agendar consulta gratuita →' : 'Book a free consultation →'}
        </button>
      </div>
    </div>
  );
}
