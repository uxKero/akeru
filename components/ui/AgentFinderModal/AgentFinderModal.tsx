'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import Modal from '@/components/ui/Modal/Modal';
import { useLanguage } from '@/context/LanguageContext';
import styles from './AgentFinderModal.module.css';

type Lang = 'en' | 'es';
type Step = 1 | 2 | 'result';

interface BilText { en: string; es: string; }

// ── Scale options ────────────────────────────────────────────────────────────

const SCALES = [
  {
    id: 'small',
    label: { en: 'Small business', es: 'Empresa pequeña' },
    sub: { en: 'Up to ~20 people', es: 'Hasta ~20 personas' },
    icon: '🏪',
    timeline: { en: '2–3 weeks', es: '2–3 semanas' },
  },
  {
    id: 'mid',
    label: { en: 'Mid-size company', es: 'Empresa mediana' },
    sub: { en: '20–200 people', es: '20–200 personas' },
    icon: '🏢',
    timeline: { en: '3–5 weeks', es: '3–5 semanas' },
  },
  {
    id: 'enterprise',
    label: { en: 'Enterprise', es: 'Empresa grande' },
    sub: { en: '200+ people', es: '200+ personas' },
    icon: '🏙️',
    timeline: { en: '5–10 weeks', es: '5–10 semanas' },
  },
];

// ── Area options ─────────────────────────────────────────────────────────────

const AREAS = [
  { id: 'sales', label: { en: 'Customer Service & Sales', es: 'Atención y ventas' }, icon: '🎯' },
  { id: 'ops', label: { en: 'Internal Operations', es: 'Operaciones internas' }, icon: '⚙️' },
  { id: 'marketing', label: { en: 'Marketing & Content', es: 'Marketing y contenido' }, icon: '📣' },
  { id: 'hr', label: { en: 'Human Resources', es: 'Recursos humanos' }, icon: '👥' },
  { id: 'data', label: { en: 'Data & Research', es: 'Datos e investigación' }, icon: '📊' },
  { id: 'engineering', label: { en: 'Engineering & Product', es: 'Programación y producto' }, icon: '🛠️' },
  { id: 'integrations', label: { en: 'Integrations & Automations', es: 'Integraciones y automatizaciones' }, icon: '🔗' },
];

// ── Default recommendation per area ─────────────────────────────────────────

const DEFAULT_REC: Record<string, string> = {
  sales: 'lead_qualifier',
  ops: 'doc_processor',
  marketing: 'content_agent',
  hr: 'cv_screener',
  data: 'data_analyst',
  engineering: 'code_review',
  integrations: 'integration_bridge',
};

// ── Recommendation data ──────────────────────────────────────────────────────

interface Recommendation {
  name: BilText;
  tagline: BilText;
  description: BilText;
  impact: { en: string[]; es: string[] };
  model: BilText;
}

const RECOMMENDATIONS: Record<string, Recommendation> = {
  lead_qualifier: {
    name: { en: 'Lead Qualifier Agent', es: 'Agente Calificador de Leads' },
    tagline: { en: 'Never lose a warm lead again', es: 'Nunca más pierdas un lead caliente' },
    description: {
      en: 'Engages every inbound lead instantly via WhatsApp, web chat, or email. Scores them against your criteria, books meetings automatically, and alerts your sales team only when a lead is genuinely ready to buy.',
      es: 'Responde cada lead entrante al instante por WhatsApp, web o email. Los puntúa según tus criterios, agenda reuniones automáticamente y alerta a tu equipo comercial solo cuando el lead está listo para comprar.',
    },
    impact: {
      en: ['+40% qualified leads', 'Response in under 90 seconds', 'Zero missed follow-ups'],
      es: ['+40% leads calificados', 'Respuesta en menos de 90 segundos', 'Cero seguimientos perdidos'],
    },
    model: { en: 'GPT-5 + WhatsApp + any CRM', es: 'GPT-5 + WhatsApp + cualquier CRM' },
  },
  doc_processor: {
    name: { en: 'Document Processing Agent', es: 'Agente de Procesamiento de Documentos' },
    tagline: { en: 'From inbox to ERP — without human hands', es: 'Del email al ERP — sin intervención humana' },
    description: {
      en: 'Reads invoices, contracts, purchase orders, and forms from email or cloud storage. Extracts structured data, validates it, and routes it to the right system — automatically.',
      es: 'Lee facturas, contratos, órdenes de compra y formularios del email o almacenamiento cloud. Extrae datos estructurados, los valida y los envía al sistema correcto de forma automática.',
    },
    impact: {
      en: ['95% extraction accuracy', '10× faster processing', 'Zero manual data entry'],
      es: ['95% de precisión de extracción', 'Procesamiento 10× más rápido', 'Cero carga manual de datos'],
    },
    model: { en: 'GPT-5 Vision + any ERP/CRM', es: 'GPT-5 Vision + cualquier ERP/CRM' },
  },
  content_agent: {
    name: { en: 'Content Production Agent', es: 'Agente de Producción de Contenido' },
    tagline: { en: 'Consistent content — without a bottleneck', es: 'Contenido constante — sin cuellos de botella' },
    description: {
      en: 'Drafts posts, newsletters, product descriptions, and social captions from a brief or from existing content. Adapts tone per channel, formats for each platform, and queues for publishing.',
      es: 'Redacta posts, newsletters, descripciones de producto y textos de redes sociales desde un brief o desde contenido existente. Adapta el tono por canal y formatea para cada plataforma.',
    },
    impact: {
      en: ['5–10× content output', 'Consistent brand voice', 'Hours saved per week'],
      es: ['Producción 5–10×', 'Voz de marca consistente', 'Horas ahorradas por semana'],
    },
    model: { en: 'GPT-5 + Notion / any CMS', es: 'GPT-5 + Notion / cualquier CMS' },
  },
  cv_screener: {
    name: { en: 'Resume Screening Agent', es: 'Agente de Screening de CVs' },
    tagline: { en: 'Review 100 CVs in the time it used to take to read 5', es: 'Revisa 100 CVs en el tiempo que antes tomaba leer 5' },
    description: {
      en: 'Reads every resume against your job requirements, scores candidates on your criteria, flags disqualifiers, and produces a ranked shortlist with structured summaries — so your team only interviews the right people.',
      es: 'Lee cada CV contra tus requisitos, puntúa candidatos según tus criterios, marca descalificantes y produce un shortlist rankeado con resúmenes estructurados. Tu equipo solo entrevista a los candidatos correctos.',
    },
    impact: {
      en: ['100 CVs reviewed in minutes', '80% less HR screening time', 'Structured, consistent scoring'],
      es: ['100 CVs revisados en minutos', '80% menos tiempo de screening de RRHH', 'Scoring estructurado y consistente'],
    },
    model: { en: 'GPT-5 + any ATS', es: 'GPT-5 + cualquier ATS' },
  },
  data_analyst: {
    name: { en: 'Data Analysis Agent', es: 'Agente de Análisis de Datos' },
    tagline: { en: 'Ask your data questions in plain language', es: 'Hace preguntas a tus datos en lenguaje natural' },
    description: {
      en: 'Connects to your databases, spreadsheets, or BI tools and answers business questions in natural language. "What were our top 5 products by margin last quarter?" — answered in seconds, with a chart included.',
      es: 'Conecta a tus bases de datos, hojas de cálculo o BI tools y responde preguntas de negocio en lenguaje natural. "¿Cuáles fueron nuestros 5 productos de mayor margen en el último trimestre?" — respondido en segundos, con gráfico.',
    },
    impact: {
      en: ['Zero SQL knowledge needed', 'Answers in under 10 seconds', 'Always up-to-date data'],
      es: ['Sin necesidad de saber SQL', 'Respuestas en menos de 10 segundos', 'Datos siempre actualizados'],
    },
    model: { en: 'GPT-5 Code Interpreter + any database', es: 'GPT-5 Code Interpreter + cualquier base de datos' },
  },
  code_review: {
    name: { en: 'Code Review Agent', es: 'Agente de Code Review' },
    tagline: { en: 'PRs reviewed before your team gets to them', es: 'PRs revisados antes de que tu equipo llegue a ellos' },
    description: {
      en: 'Reviews every pull request automatically. Flags bugs, security vulnerabilities, performance issues, and style violations — with specific line-level comments and suggested fixes, before a human reviewer opens the diff.',
      es: 'Revisa cada pull request automáticamente. Marca bugs, vulnerabilidades de seguridad, problemas de performance y violaciones de estilo, con comentarios a nivel de línea y correcciones sugeridas.',
    },
    impact: {
      en: ['PRs reviewed in < 3 min', '40% fewer bug escapes', 'Consistent code quality standards'],
      es: ['PRs revisados en < 3 min', '40% menos bugs escapados', 'Estándares de calidad de código consistentes'],
    },
    model: { en: 'Claude 4 Sonnet + GitHub Actions', es: 'Claude 4 Sonnet + GitHub Actions' },
  },
  integration_bridge: {
    name: { en: 'Integration Bridge Agent', es: 'Agente Puente de Integración' },
    tagline: { en: 'All your tools — finally in sync', es: 'Todas tus herramientas — finalmente sincronizadas' },
    description: {
      en: 'Monitors events in one system and propagates changes to another in near real-time. A closed deal in your CRM creates the client in your ERP. A shipped order updates the CRM automatically — zero manual exports.',
      es: 'Monitorea eventos en un sistema y propaga cambios al otro casi en tiempo real. Un negocio cerrado en tu CRM crea el cliente en el ERP. Un pedido despachado actualiza el CRM automáticamente — sin exportaciones manuales.',
    },
    impact: {
      en: ['Near real-time sync', 'Zero manual exports/imports', 'Single source of truth'],
      es: ['Sincronización casi en tiempo real', 'Cero exportaciones/importaciones manuales', 'Fuente única de verdad'],
    },
    model: { en: 'Custom agents + REST APIs + Webhooks', es: 'Agentes propios + APIs REST + Webhooks' },
  },
};

// ── Copy ─────────────────────────────────────────────────────────────────────

const COPY = {
  en: {
    label: 'Agent Finder',
    title: 'Which agent do I need?',
    subtitle: "Answer 2 quick questions — we'll point you to the right solution.",
    step1Q: "What's the size of your operation?",
    step2Q: 'Where do you feel the most friction?',
    stepLabel: (n: number) => `Step ${n} of 2`,
    resultTag: 'Your recommended agent',
    timelineLabel: 'Estimated deployment',
    modelLabel: 'Typical stack',
    startProject: 'Start this project →',
    changeAnswers: 'Change my answers',
    back: '← Back',
  },
  es: {
    label: 'Descubridor de Agentes',
    title: '¿Qué agente necesito?',
    subtitle: 'Responde 2 preguntas rápidas — te vamos a recomendar la solución correcta.',
    step1Q: '¿Cuál es el tamaño de tu operación?',
    step2Q: '¿Dónde sentís más fricción?',
    stepLabel: (n: number) => `Paso ${n} de 2`,
    resultTag: 'Tu agente recomendado',
    timelineLabel: 'Despliegue estimado',
    modelLabel: 'Stack típico',
    startProject: 'Iniciar este proyecto →',
    changeAnswers: 'Cambiar mis respuestas',
    back: '← Volver',
  },
};

// ── Component ────────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -40, opacity: 0 }),
};

export default function AgentFinderModal() {
  const { activeModal, closeModal, openModal } = useModal();
  const { language } = useLanguage();
  const lang = (language as Lang) === 'es' ? 'es' : 'en';
  const copy = COPY[lang];

  const [step, setStep] = useState<Step>(1);
  const [dir, setDir] = useState(1);
  const [scale, setScale] = useState<string | null>(null);
  const [area, setArea] = useState<string | null>(null);

  const reset = () => {
    setStep(1);
    setScale(null);
    setArea(null);
    setDir(1);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(reset, 350);
  };

  const go = (nextStep: Step) => {
    setDir(1);
    setStep(nextStep);
  };

  const goBack = (prevStep: Step) => {
    setDir(-1);
    setStep(prevStep);
  };

  const scaleData = SCALES.find(s => s.id === scale);
  const recommendation = area ? RECOMMENDATIONS[DEFAULT_REC[area]] : null;

  const stepNum = step === 'result' ? 3 : (step as number);

  return (
    <Modal isOpen={activeModal === 'agent-finder'} onClose={handleClose} maxWidth={600}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>{copy.label}</span>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.subtitle}>{copy.subtitle}</p>
        </div>

        {/* Progress dots */}
        <div className={styles.progress}>
          {[1, 2].map(n => (
            <div
              key={n}
              className={[
                styles.progressDot,
                step === n ? styles.active : '',
                (step === 'result' || (typeof step === 'number' && step > n)) ? styles.done : '',
              ].join(' ')}
            />
          ))}
        </div>

        <AnimatePresence mode="wait" custom={dir}>

          {/* STEP 1 — Scale */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className={styles.stepContainer}
            >
              <p className={styles.stepLabel}>{copy.stepLabel(1)}</p>
              <h3 className={styles.question}>{copy.step1Q}</h3>
              <div className={styles.options}>
                {SCALES.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    className={`${styles.optionCard} ${scale === s.id ? styles.selected : ''}`}
                    onClick={() => { setScale(s.id); go(2); }}
                  >
                    <span className={styles.optionIcon}>{s.icon}</span>
                    <span className={styles.optionText}>
                      <span className={styles.optionLabel}>{s.label[lang]}</span>
                      <span className={styles.optionSub}>{s.sub[lang]}</span>
                    </span>
                    {scale === s.id && (
                      <span className={styles.optionCheck}><Check size={13} /></span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 — Area */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className={styles.stepContainer}
            >
              <p className={styles.stepLabel}>{copy.stepLabel(2)}</p>
              <h3 className={styles.question}>{copy.step2Q}</h3>
              <div className={styles.optionsGrid}>
                {AREAS.map(a => (
                  <button
                    key={a.id}
                    type="button"
                    className={`${styles.optionCard} ${area === a.id ? styles.selected : ''}`}
                    onClick={() => { setArea(a.id); go('result'); }}
                  >
                    <span className={styles.optionIcon}>{a.icon}</span>
                    <span className={styles.optionText}>
                      <span className={styles.optionLabel}>{a.label[lang]}</span>
                    </span>
                    {area === a.id && (
                      <span className={styles.optionCheck}><Check size={13} /></span>
                    )}
                  </button>
                ))}
              </div>
              <button type="button" className={styles.backBtn} onClick={() => goBack(1)}>
                {copy.back}
              </button>
            </motion.div>
          )}

          {/* RESULT */}
          {step === 'result' && recommendation && scaleData && (
            <motion.div
              key="result"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className={styles.stepContainer}
            >
              <div className={styles.result}>
                <span className={styles.resultTag}>✦ {copy.resultTag}</span>
                <h3 className={styles.resultName}>{recommendation.name[lang]}</h3>
                <p className={styles.resultTagline}>{recommendation.tagline[lang]}</p>
                <p className={styles.resultDesc}>{recommendation.description[lang]}</p>

                <div className={styles.resultImpact}>
                  {recommendation.impact[lang].map((badge, i) => (
                    <span key={i} className={styles.impactBadge}>{badge}</span>
                  ))}
                </div>

                <div className={styles.divider} />

                <div className={styles.resultMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{copy.timelineLabel}</span>
                    <span className={styles.metaValue}>{scaleData.timeline[lang]}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{copy.modelLabel}</span>
                    <span className={styles.metaValue}>{recommendation.model[lang]}</span>
                  </div>
                </div>

                <div className={styles.resultActions}>
                  <button
                    type="button"
                    className={styles.btnPrimary}
                    onClick={() => {
                      handleClose();
                      setTimeout(() => openModal('booking'), 100);
                    }}
                  >
                    {copy.startProject}
                  </button>
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    onClick={reset}
                  >
                    {copy.changeAnswers}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </Modal>
  );
}
