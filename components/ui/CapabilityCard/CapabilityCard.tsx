'use client';

import { motion, Variants } from 'framer-motion';
import styles from './CapabilityCard.module.css';
import Chip from '../Chip/Chip';

interface CapabilityCardProps {
  title: string;
  skills: string[];
}

export default function CapabilityCard({ title, skills }: CapabilityCardProps) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const staggerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } }
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <motion.div variants={cardVariants} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <motion.div 
        className={styles.skillsGrid}
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={skillVariants}>
            <Chip>{skill}</Chip>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
