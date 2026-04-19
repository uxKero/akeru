'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './ServiceBlock.module.css';
import { useLanguage } from '@/context/LanguageContext';

interface Service {
  title: string;
  description: string;
}

interface ServiceBlockProps {
  service: Service;
  slug: string;
}

export default function ServiceBlock({ service, slug }: ServiceBlockProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax for image: moves nicely as user scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div className={styles.block} ref={containerRef}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Link href={`/services/${slug}`} className={styles.titleLink}>
          <h2 className={styles.title}>{service.title}</h2>
        </Link>
        <p className={styles.description}>{service.description}</p>
        <Link href={`/services/${slug}`} style={{ textDecoration: 'none' }}>
          <Button variant="ghost-dark">{t.serviceBlock.viewMore}</Button>
        </Link>
      </motion.div>

      <div className={styles.imageWrapper}>
        <motion.div 
          className={styles.imagePlaceholder} 
          style={{ y: imageY }}
        >
          {/* We use a colored placeholder similar to an abstract mockup layout */}
          <div className={styles.mockupHeader}>
            <div className={styles.mockupDots}>
              <span /> <span /> <span />
            </div>
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.mockupLine} style={{ width: '60%' }} />
            <div className={styles.mockupLine} style={{ width: '80%' }} />
            <div className={styles.mockupLine} style={{ width: '40%' }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

