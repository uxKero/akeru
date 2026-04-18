'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SubHeadline.module.css';

function AnimatedWord({
  word,
  progress,
  start,
  end
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 0.85]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

export default function SubHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const { t } = useLanguage();
  const text = t.subHeadline.text;
  const words = text.split(" ");

  return (
    <section className={styles.section} ref={containerRef}>
      <p className={styles.text}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return (
            <AnimatedWord
              key={i}
              word={word}
              progress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}
      </p>
    </section>
  );
}
