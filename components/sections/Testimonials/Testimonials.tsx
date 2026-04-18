'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.css';
import { useLanguage } from '@/context/LanguageContext';

type ReviewSlide = {
  quote1: string;
  quote2: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
};

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;
  const reviews = tm.reviews || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });

    const isRightHalf = x > rect.width / 2;
    setDirection(isRightHalf ? 'right' : 'left');
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;

    if (direction === 'right') {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    } else {
      setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }
  };

  return (
    <section 
      className={styles.section}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.label}>{tm.label}</div>
        
        <div className={styles.sliderTrackWrapper}>
          <motion.div 
            className={styles.sliderTrack}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "tween", duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            {reviews.map((review: ReviewSlide, idx: number) => (
              <div key={idx} className={styles.testimonialContent}>
                <div className={styles.companyName}>{review.companyName}</div>
                <p className={styles.text}>
                  <span className={styles.highlight}>{review.quote1}</span>{review.quote2}
                </p>
                
                <div className={styles.authorGroup}>
                  <div className={styles.avatar} />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{review.authorName}</div>
                    <div className={styles.authorTitle}>{review.authorTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isHovering && (
          <motion.div 
            className={styles.customCursor}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              x: cursorPos.x - 40,
              y: cursorPos.y - 40
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              scale: { duration: 0.2 },
              opacity: { duration: 0.2 },
              x: { type: "spring", damping: 30, stiffness: 300, mass: 0.5 },
              y: { type: "spring", damping: 30, stiffness: 300, mass: 0.5 }
            }}
          >
            {direction === 'right' ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
