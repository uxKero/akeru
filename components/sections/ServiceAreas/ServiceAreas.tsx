'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ServiceAreas.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import ServiceBlock from '@/components/ui/ServiceBlock/ServiceBlock';

const SERVICE_SLUGS = [
  'sales-customer-service',
  'internal-operations',
  'marketing-content',
  'human-resources',
  'data-research',
  'engineering-product',
  'integrations-automations',
];

export default function ServiceAreas() {
  const { t } = useLanguage();
  const isMobileLayout = useMediaQuery('(max-width: 767px)');
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${(t.serviceAreas.length - 1) * 100}vw`]
  );

  if (isMobileLayout) {
    return (
      <section className={styles.mobileStack} id="services">
        <div className={styles.mobileStackInner}>
          {t.serviceAreas.map((service, index) => (
            <div key={index} className={styles.mobileStackBlock}>
              <ServiceBlock service={service} slug={SERVICE_SLUGS[index]} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      className={styles.scrollSection}
      id="services"
      style={{ height: `${t.serviceAreas.length * 100}vh` }}
    >
      <div className={styles.stickyContainer}>
        <motion.div style={{ x }} className={styles.horizontalFlex}>
          {t.serviceAreas.map((service, index) => (
            <div key={index} className={styles.itemWrapper}>
              <ServiceBlock service={service} slug={SERVICE_SLUGS[index]} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
