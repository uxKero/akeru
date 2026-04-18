'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';
import Button from '@/components/ui/Button/Button';

import Link from 'next/link';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const rotatingLines = t.hero.rotating;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        let nextIndex = Math.floor(Math.random() * rotatingLines.length);
        while (nextIndex === prev) {
          nextIndex = Math.floor(Math.random() * rotatingLines.length);
        }
        return nextIndex;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingLines.length]);

  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.headlineGroup}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.rotatingWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={rotatingLines[index]}
              className={styles.rotatingText}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {rotatingLines[index]}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.h1 
          className={styles.fixedLine}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {t.hero.fixed}
        </motion.h1>
      </motion.div>

      <motion.p
        className={styles.sub}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {t.hero.sub}
      </motion.p>

      <motion.div
        className={styles.actions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Link href="/book" style={{ textDecoration: 'none' }}>
          <Button variant="accent">{t.hero.btnPrimary}</Button>
        </Link>
        <Button variant="ghost-dark">{t.hero.btnSecondary}</Button>
      </motion.div>
    </section>
  );
}
