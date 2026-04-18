'use client';

import clsx from 'clsx';
import { useNavScroll } from '@/hooks/useNavScroll';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

import Link from 'next/link';

export default function Navbar() {
  const isScrolled = useNavScroll();
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className={clsx(styles.nav, isScrolled && styles.scrolled)}>
      <div className={styles.logoGroup}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={styles.logoTitle}>Akeru.</span>
        </Link>
      </div>
      
      <div className={styles.rightGroup}>
        <div className={styles.navLinks}>
          <Link href="/#services">{t.nav.services}</Link>
          <Link href="/#process">{t.nav.process}</Link>
          <Link href="/#cases">{t.nav.cases}</Link>
          <Link href="/#faq">{t.nav.faq}</Link>
        </div>

        <div className={styles.actions}>
          <Link href="/book" className={styles.btnCollab} style={{ textDecoration: 'none' }}>{t.nav.cta}</Link>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {t.nav.langSwitch}
          </button>
        </div>
      </div>
    </nav>
  );
}

