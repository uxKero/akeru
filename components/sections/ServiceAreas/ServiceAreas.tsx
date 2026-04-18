'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ServiceAreas.module.css';
import { useLanguage } from '@/context/LanguageContext';
import ServiceBlock from '@/components/ui/ServiceBlock/ServiceBlock';

export default function ServiceAreas() {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal shift based on the number of cards
  // We use string interpolation to generate the right vw values.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(t.serviceAreas.length - 1) * 100}vw`]);

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
              <ServiceBlock service={service} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
