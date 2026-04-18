'use client';

import styles from './FAQ.module.css';
import { useLanguage } from '@/context/LanguageContext';
import FAQItem from '@/components/ui/FAQItem/FAQItem';

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <section className={styles.section} id="faq">
      <div className={styles.label}>{t.faq.label}</div>
      <h2 className={styles.title}>{t.faq.title}</h2>
      
      <div className={styles.list}>
        {t.faq.list.map((entry, index) => (
          <FAQItem key={index} entry={entry} />
        ))}
      </div>
    </section>
  );
}
