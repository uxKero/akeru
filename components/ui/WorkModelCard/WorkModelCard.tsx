'use client';

import styles from './WorkModelCard.module.css';
import Button from '../Button/Button';

interface WorkModel {
  label: string;
  title: string;
  description: string;
  benefits: string[];
}

interface WorkModelCardProps {
  model: WorkModel;
}

export default function WorkModelCard({ model }: WorkModelCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.labelWrapper}>
        <span className={styles.label}>{model.label}</span>
      </div>
      
      <h3 className={styles.title}>{model.title}</h3>
      
      <div className={styles.divider} />
      
      <p className={styles.description}>{model.description}</p>
      
      <div className={styles.divider} />
      
      <ul className={styles.benefits}>
        {model.benefits.map((benefit, idx) => (
          <li key={idx}>
            <span className={styles.benefitText}>{benefit}</span>
          </li>
        ))}
      </ul>

      <Button variant="ghost-dark" className={styles.btn}>
        Ver más
      </Button>
    </div>
  );
}
