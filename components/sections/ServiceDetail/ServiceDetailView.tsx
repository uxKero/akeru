'use client';

import { motion, type Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useModal } from '@/context/ModalContext';
import { useLanguage } from '@/context/LanguageContext';
import type { ServiceDetail } from '@/data/servicesDetail';
import { servicesDetail } from '@/data/servicesDetail';
import styles from './ServiceDetailView.module.css';

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
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
        <motion.span variants={fadeUp} className={styles.tag}>{service.tag[lang]}</motion.span>
        <motion.h1 variants={fadeUp} className={styles.title}>{service.title[lang]}</motion.h1>
        <motion.p variants={fadeUp} className={styles.tagline}>{service.tagline[lang]}</motion.p>
        <motion.p variants={fadeUp} className={styles.heroDesc}>{service.heroDesc[lang]}</motion.p>
      </motion.div>

      {/* Metrics */}
      <div className={styles.metrics}>
        <div className={styles.metricItem}>
          <div className={styles.metricValue}>{service.metric1.value}</div>
          <div className={styles.metricLabel}>{service.metric1.label[lang]}</div>
        </div>
        <div className={styles.metricItem}>
          <div className={styles.metricValue}>{service.metric2.value}</div>
          <div className={styles.metricLabel}>{service.metric2.label[lang]}</div>
        </div>
        <div className={styles.metricItem}>
          <div className={styles.metricValue}>{service.metric3.value}</div>
          <div className={styles.metricLabel}>{service.metric3.label[lang]}</div>
        </div>
      </div>

      {/* Problems + Capabilities */}
      <div className={styles.content}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className={styles.sectionLabel}>
            {lang === 'es' ? 'El problema' : 'The problem'}
          </motion.p>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            {lang === 'es' ? '¿Por qué lo hacen manualmente todavía?' : 'Why is this still done manually?'}
          </motion.h2>
          <ul className={styles.problemList}>
            {service.problems[lang].map((problem, i) => (
              <motion.li key={i} variants={fadeUp} className={styles.problemItem}>
                <span className={styles.problemBullet} />
                <span className={styles.problemText}>{problem}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className={styles.sectionLabel}>
            {lang === 'es' ? 'Qué hace el agente' : 'What the agent does'}
          </motion.p>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            {lang === 'es' ? 'Capacidades del agente' : 'Agent capabilities'}
          </motion.h2>
          <ul className={styles.capabilitiesList}>
            {service.capabilities[lang].map((cap, i) => (
              <motion.li key={i} variants={fadeUp} className={styles.capabilityItem}>
                <span className={styles.capabilityCheck}>
                  <Check size={11} strokeWidth={3} color="rgba(255,255,255,0.7)" />
                </span>
                <span className={styles.capabilityText}>{cap}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Use Case */}
      <div className={styles.useCaseSection}>
        <p className={styles.sectionLabel}>{service.useCase.label[lang]}</p>
        <motion.div
          className={styles.useCaseCard}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.useCaseBlock}>
            <span className={styles.useCaseBlockLabel}>
              {lang === 'es' ? 'El desafío' : 'The challenge'}
            </span>
            <span className={styles.useCaseBlockTitle}>
              {lang === 'es' ? 'Situación del cliente' : 'Client situation'}
            </span>
            <p className={styles.useCaseText}>{service.useCase.scenario[lang]}</p>
          </div>
          <div className={styles.useCaseBlock}>
            <span className={styles.useCaseBlockLabel}>
              {lang === 'es' ? 'La solución' : 'The solution'}
            </span>
            <span className={styles.useCaseBlockTitle}>
              {lang === 'es' ? 'Qué construimos' : 'What we built'}
            </span>
            <p className={styles.useCaseText}>{service.useCase.outcome[lang]}</p>
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className={styles.timelineSection}>
        <p className={styles.sectionLabel}>{service.timeline.label[lang]}</p>
        <div className={styles.timelineGrid}>
          {service.timeline.phases.map((phase, i) => (
            <div key={i} className={styles.timelinePhase}>
              <div className={styles.phaseNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.phaseName}>{phase.name[lang]}</div>
              <div className={styles.phaseDuration}>{phase.duration[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className={styles.stackSection}>
        <p className={styles.sectionLabel}>
          {lang === 'es' ? 'Stack típico' : 'Typical stack'}
        </p>
        <div className={styles.stackGrid}>
          {service.stack.map((s, i) => (
            <span key={i} className={styles.stackBadge}>{s}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          {lang === 'es' ? '¿Querés este agente en tu empresa?' : 'Want this agent in your business?'}
        </h2>
        <p className={styles.ctaSubtitle}>
          {lang === 'es'
            ? 'Agendamos una llamada de 30 minutos para entender tu caso y diseñar la solución.'
            : "We'll schedule a 30-minute call to understand your case and design the right solution."}
        </p>
        <button className={styles.ctaBtn} onClick={() => openModal('booking')}>
          {lang === 'es' ? 'Agendar consulta gratuita →' : 'Book a free consultation →'}
        </button>
      </div>

      {/* Floating sidebar — all services */}
      <nav className={styles.servicesSidebar} aria-label={lang === 'es' ? 'Servicios' : 'Services'}>
        <span className={styles.sidebarHeader}>{lang === 'es' ? 'Servicios' : 'Services'}</span>
        {servicesDetail.map(s => {
          const isCurrent = s.slug === service.slug;
          return isCurrent ? (
            <span key={s.slug} className={`${styles.sidebarLink} ${styles.sidebarCurrent}`}>
              <span className={styles.sidebarLinkText}>{s.tag[lang]}</span>
              <span className={`${styles.sidebarDot} ${styles.sidebarDotCurrent}`} />
            </span>
          ) : (
            <Link key={s.slug} href={`/services/${s.slug}`} className={styles.sidebarLink}>
              <span className={styles.sidebarLinkText}>{s.tag[lang]}</span>
              <span className={styles.sidebarDot} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
