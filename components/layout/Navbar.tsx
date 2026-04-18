'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavScroll } from '@/hooks/useNavScroll';
import { useLanguage } from '@/context/LanguageContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Navbar.module.css';

import Link from 'next/link';

export default function Navbar() {
  const isScrolled = useNavScroll();
  const { t, toggleLanguage } = useLanguage();
  const isNarrow = useMediaQuery('(max-width: 860px)');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isNarrow) {
      setMenuOpen(false);
    }
  }, [isNarrow]);

  useEffect(() => {
    if (menuOpen && isNarrow) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen, isNarrow]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={clsx(styles.nav, isScrolled && styles.scrolled)}
        aria-label="Main"
      >
        <div className={styles.logoGroup}>
          <Link
            href="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={closeMenu}
          >
            <span className={styles.logoTitle}>Akeru.</span>
          </Link>
        </div>

        {isNarrow && (
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        )}

        <div className={styles.rightGroup}>
          <div className={styles.navLinks}>
            <Link href="/#services" onClick={closeMenu}>
              {t.nav.services}
            </Link>
            <Link href="/#process" onClick={closeMenu}>
              {t.nav.process}
            </Link>
            <Link href="/#cases" onClick={closeMenu}>
              {t.nav.cases}
            </Link>
            <Link href="/#faq" onClick={closeMenu}>
              {t.nav.faq}
            </Link>
          </div>

          <div className={styles.actions}>
            <Link
              href="/book"
              className={styles.btnCollab}
              style={{ textDecoration: 'none' }}
              onClick={closeMenu}
            >
              {t.nav.cta}
            </Link>
            <button className={styles.langBtn} type="button" onClick={toggleLanguage}>
              {t.nav.langSwitch}
            </button>
          </div>
        </div>
      </nav>

      {isNarrow && menuOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Cerrar menú"
          tabIndex={-1}
          onClick={closeMenu}
        />
      )}

      {isNarrow && (
        <div
          id="mobile-nav-drawer"
          className={clsx(styles.mobileDrawer, menuOpen && styles.mobileDrawerOpen)}
          aria-hidden={menuOpen ? 'false' : 'true'}
        >
          <div className={styles.mobileDrawerInner}>
            <nav className={styles.mobileNavLinks} aria-label="Mobile section links">
              <Link href="/#services" onClick={closeMenu}>
                {t.nav.services}
              </Link>
              <Link href="/#process" onClick={closeMenu}>
                {t.nav.process}
              </Link>
              <Link href="/#cases" onClick={closeMenu}>
                {t.nav.cases}
              </Link>
              <Link href="/#faq" onClick={closeMenu}>
                {t.nav.faq}
              </Link>
            </nav>
            <div className={styles.mobileActions}>
              <Link
                href="/book"
                className={styles.btnCollabMobile}
                style={{ textDecoration: 'none' }}
                onClick={closeMenu}
              >
                {t.nav.cta}
              </Link>
              <button className={styles.langBtnMobile} type="button" onClick={toggleLanguage}>
                {t.nav.langSwitch}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
