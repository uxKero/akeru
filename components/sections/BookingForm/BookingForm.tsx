'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Building, Phone, Mail, User, ArrowLeft, ChevronRight } from 'lucide-react';
import styles from './BookingForm.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button/Button';

import Link from 'next/link';

import { agentCategories } from '@/data/agentCategories';

interface BookingFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function BookingForm({ isModal = false, onClose }: BookingFormProps) {
  const { language, t } = useLanguage();
  const bk = t.booking;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    agentType: '',
    otherDesc: ''
  });

  const [activeCategoryView, setActiveCategoryView] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const categoriesList = agentCategories[language] || agentCategories.en;

  const catOptions = categoriesList.map((cat, idx) => ({
    id: idx.toString(),
    label: cat.groupLabel
  }));
  catOptions.push({ id: 'other', label: language === 'es' ? 'Otro (Agente a la medida)' : 'Other (Custom Agent)' });

  let currentAgentOptions: { id: string; label: string }[] = [];
  if (activeCategoryView && activeCategoryView !== 'other') {
    currentAgentOptions = categoriesList[parseInt(activeCategoryView)]?.options || [];
  }

  const handleSelectAgent = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData({ ...formData, agentType: id });
  };

  const handleSelectCategory = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (id === 'other') {
      setFormData({ ...formData, agentType: 'other' });
    } else {
      setActiveCategoryView(id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        language === 'es'
          ? 'Hubo un error al enviar. Intentá de nuevo.'
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    const innerSuccess = (boxClass: string) => (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={boxClass}
      >
        <div className={styles.checkCircle}>
          <Check size={32} />
        </div>
        <h2>{bk.successTitle}</h2>
        <p>{bk.successText}</p>
        <div className={styles.backBtn}>
          {onClose ? (
            <Button variant="ghost-dark" onClick={onClose}>{bk.backHome}</Button>
          ) : (
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="ghost-dark">{bk.backHome}</Button>
            </Link>
          )}
        </div>
      </motion.div>
    );

    if (isModal) {
      return <div className={styles.successViewModal}>{innerSuccess(styles.successBoxModal)}</div>;
    }

    return <div className={styles.successView}>{innerSuccess(styles.successBox)}</div>;
  }

  const formContent = (
    <motion.div
      className={isModal ? styles.containerModal : styles.container}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className={styles.header}>
          <h1 className={styles.title}>{bk.title}</h1>
          <p className={styles.subtitle}>{bk.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <User size={18} className={styles.icon} />
              <input 
                type="text" 
                placeholder={bk.fields.name} 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <Mail size={18} className={styles.icon} />
              <input 
                type="email" 
                placeholder={bk.fields.email} 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <Phone size={18} className={styles.icon} />
              <input 
                type="tel" 
                placeholder={bk.fields.whatsapp} 
                required
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <Building size={18} className={styles.icon} />
              <input 
                type="text" 
                placeholder={bk.fields.company} 
                required
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.selectionContainer}>
            <div className={styles.selectionHeader}>
              {language === 'es' ? 'Selecciona tu caso de uso' : 'Select your use case'}
            </div>
            
            <div className={styles.selectionBlock}>
              <AnimatePresence mode="wait">
                {!activeCategoryView ? (
                  <motion.div 
                    key="categories"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.scrollArea}
                  >
                    {catOptions.map(option => (
                      <div 
                        key={option.id} 
                        className={`${styles.selectionItem} ${formData.agentType === 'other' && option.id === 'other' ? styles.selected : ''}`}
                        onClick={(e) => handleSelectCategory(option.id, e)}
                        style={option.id === 'other' ? { fontWeight: 600, color: '#fff', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', paddingTop: '16px' } : {}}
                      >
                        {option.label}
                        {option.id !== 'other' && <ChevronRight size={16} style={{ opacity: 0.5 }} />}
                        {formData.agentType === 'other' && option.id === 'other' && <Check size={16} />}
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="agents"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.scrollArea}
                  >
                    <div 
                      className={styles.backItem} 
                      onClick={(e) => { e.stopPropagation(); setActiveCategoryView(null); }}
                    >
                      <ArrowLeft size={16}/> {language === 'es' ? 'Volver a categorías' : 'Back to categories'}
                    </div>
                    <div style={{ paddingTop: '8px', paddingBottom: '16px' }}>
                      {currentAgentOptions.map(opt => (
                        <div 
                          key={opt.id}
                          className={`${styles.selectionItem} ${formData.agentType === opt.id ? styles.selected : ''}`}
                          onClick={(e) => handleSelectAgent(opt.id, e)}
                        >
                          {opt.label}
                          {formData.agentType === opt.id && <Check size={16} />}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence>
            {formData.agentType && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={styles.textareaContainer}
              >
                <textarea 
                  placeholder={
                    formData.agentType === 'other' 
                      ? bk.otherPlaceholder 
                      : (language === 'es' ? 'Opcional: Cuéntanos un poco más sobre tu necesidad o caso de uso...' : 'Optional: Tell us a bit more about your needs or specific use case...')
                  }
                  value={formData.otherDesc}
                  onChange={e => setFormData({...formData, otherDesc: e.target.value})}
                  className={`${styles.input} ${styles.textarea}`}
                  required={formData.agentType === 'other'}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {submitError && (
            <p style={{ color: '#ff6b6b', fontSize: '14px', textAlign: 'center', marginBottom: '8px' }}>
              {submitError}
            </p>
          )}
          <div className={styles.submitRow}>
            <Button variant="accent" type="submit" className={styles.submitBtn} disabled={isLoading}>
              {isLoading ? (language === 'es' ? 'Enviando...' : 'Sending...') : bk.submit}
            </Button>
          </div>
        </form>
      </motion.div>
  );

  if (isModal) {
    return formContent;
  }

  return (
    <section className={styles.wrapper}>
      {formContent}
    </section>
  );
}
