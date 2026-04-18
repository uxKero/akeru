'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className={styles.footerContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.expandableContent}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.contentInner}>
              {/* Branding Col */}
              <div className={styles.colLogo}>
                <span className={styles.logoTitle}>Akeru.</span>
                <p className={styles.tagline}>{t.footer.tagline}</p>
              </div>

              {/* Col 1 */}
              <div>
                <h4 className={styles.colTitle}>{language === 'es' ? 'Plataforma' : 'Platform'}</h4>
                <div className={styles.colLinks}>
                  <Link href="/#services" onClick={() => setIsOpen(false)} className={styles.link}>{t.nav.services}</Link>
                  <Link href="/#process" onClick={() => setIsOpen(false)} className={styles.link}>{t.nav.process}</Link>
                  <Link href="/#cases" onClick={() => setIsOpen(false)} className={styles.link}>{t.nav.cases}</Link>
                </div>
              </div>

              {/* Col 2 */}
              <div>
                <h4 className={styles.colTitle}>{language === 'es' ? 'Compañía' : 'Company'}</h4>
                <div className={styles.colLinks}>
                  <Link href="/#faq" onClick={() => setIsOpen(false)} className={styles.link}>{t.nav.faq}</Link>
                  <Link href="/book" className={styles.link}>{language === 'es' ? 'Agendar consulta' : 'Book consultation'}</Link>
                </div>
              </div>

              {/* Col 3 */}
              <div>
                <h4 className={styles.colTitle}>{language === 'es' ? 'Legal' : 'Legal'}</h4>
                <div className={styles.colLinks}>
                  <Link href="#" className={styles.link}>{language === 'es' ? 'Privacidad' : 'Privacy'}</Link>
                  <Link href="#" className={styles.link}>{language === 'es' ? 'Términos' : 'Terms'}</Link>
                </div>
              </div>

              {/* Col 4 */}
              <div>
                <h4 className={styles.colTitle}>{language === 'es' ? 'Redes' : 'Social'}</h4>
                <div className={styles.colLinks}>
                  <a href="#" className={styles.link}>LinkedIn</a>
                  <a href="#" className={styles.link}>Twitter (X)</a>
                  <a href="#" className={styles.link}>GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.toggleLine} onClick={() => setIsOpen(!isOpen)}>
        <button className={styles.toggleBtn}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          {isOpen ? (language === 'es' ? 'Cerrar Footer' : 'Close Footer') : (language === 'es' ? 'Abrir Footer' : 'Open Footer')}
        </button>
      </div>
    </footer>
  );
}
