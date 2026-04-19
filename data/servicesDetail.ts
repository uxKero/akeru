export interface ServiceDetail {
  slug: string;
  tag: { en: string; es: string };
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  heroDesc: { en: string; es: string };
  problems: { en: string[]; es: string[] };
  capabilities: { en: string[]; es: string[] };
  useCase: {
    label: { en: string; es: string };
    scenario: { en: string; es: string };
    outcome: { en: string; es: string };
  };
  timeline: {
    label: { en: string; es: string };
    phases: Array<{ name: { en: string; es: string }; duration: { en: string; es: string } }>;
  };
  stack: string[];
  metric1: { value: string; label: { en: string; es: string } };
  metric2: { value: string; label: { en: string; es: string } };
  metric3: { value: string; label: { en: string; es: string } };
}

export const servicesDetail: ServiceDetail[] = [
  {
    slug: 'sales-customer-service',
    tag: { en: 'Sales & Customer Service', es: 'Atención y Ventas' },
    title: { en: 'AI Agents for Sales & Customer Service', es: 'Agentes de IA para Atención y Ventas' },
    tagline: {
      en: 'Convert more leads. Resolve more tickets. Without adding headcount.',
      es: 'Más leads convertidos. Más tickets resueltos. Sin contratar más personas.',
    },
    heroDesc: {
      en: 'Your customers don\'t wait. They message at 2am, on weekends, from a dozen different channels — and they expect an instant, accurate answer. We deploy AI agents that qualify leads, handle support, and drive conversions around the clock, with the context and tone your brand requires.',
      es: 'Tus clientes no esperan. Escriben a las 2am, los fines de semana, desde decenas de canales distintos — y esperan una respuesta inmediata y precisa. Desplegamos agentes de IA que califican leads, gestionan soporte y convierten, las 24 horas, con el contexto y el tono que tu marca necesita.',
    },
    problems: {
      en: [
        'Leads go cold because follow-up happens too late or not at all',
        'Your support team answers the same 20 questions 50 times a day',
        'You\'re losing revenue during nights, weekends, and holidays',
      ],
      es: [
        'Los leads se enfrían porque el seguimiento llega tarde o no llega',
        'Tu equipo de soporte responde las mismas 20 preguntas 50 veces al día',
        'Perdés ingresos durante las noches, los fines de semana y los feriados',
      ],
    },
    capabilities: {
      en: [
        'Lead qualification and scoring via WhatsApp, web chat, and email',
        'Automated quote generation and appointment booking',
        '24/7 Tier-1 support with smart escalation to humans',
        'Post-sale follow-up, satisfaction surveys, and upsell sequences',
        'CRM auto-update after every interaction (compatible with any CRM)',
        'Multi-channel presence: WhatsApp, Instagram DM, web widget, email',
      ],
      es: [
        'Calificación y scoring de leads por WhatsApp, web chat y email',
        'Generación de cotizaciones automáticas y agendamiento de citas',
        'Soporte nivel 1 24/7 con escalado inteligente a humanos',
        'Seguimiento post-venta, encuestas de satisfacción y secuencias de upsell',
        'Actualización automática del CRM después de cada interacción (compatible con cualquier CRM)',
        'Presencia multicanal: WhatsApp, Instagram DM, widget web, email',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'A mid-size real estate agency receives 80–120 inquiries per day across WhatsApp and their website. Their 3-person sales team manually qualifies leads, books property visits, and sends follow-ups — which takes 4+ hours daily and results in slow response times.',
        es: 'Una agencia inmobiliaria mediana recibe 80–120 consultas por día en WhatsApp y su web. Su equipo de 3 vendedores califica leads manualmente, agenda visitas y envía seguimientos — lo que les consume más de 4 horas diarias y genera tiempos de respuesta lentos.',
      },
      outcome: {
        en: 'We deploy a qualification agent that greets every lead instantly, asks 5 structured qualifying questions, scores them automatically, books a property tour in the CRM, and notifies the right sales rep — all in under 3 minutes. The team now focuses exclusively on warm, booked leads.',
        es: 'Desplegamos un agente calificador que saluda a cada lead al instante, hace 5 preguntas estructuradas, los puntúa automáticamente, agenda una visita en el CRM y notifica al vendedor correcto — todo en menos de 3 minutos. El equipo ahora se enfoca exclusivamente en leads calificados y ya agendados.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Discovery & flow mapping', es: 'Descubrimiento y mapeo de flujos' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Agent build & prompt engineering', es: 'Construcción del agente y prompt engineering' }, duration: { en: '3–5 days', es: '3–5 días' } },
        { name: { en: 'CRM integration & testing', es: 'Integración CRM y testing' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Go live & monitoring', es: 'Lanzamiento y monitoreo' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['GPT-5', 'WhatsApp', 'any CRM', 'Make / Zapier'],
    metric1: { value: '+40%', label: { en: 'qualified leads', es: 'leads calificados' } },
    metric2: { value: '<90s', label: { en: 'avg. response time', es: 'tiempo de respuesta promedio' } },
    metric3: { value: '70%', label: { en: 'tickets resolved without human', es: 'tickets resueltos sin intervención humana' } },
  },
  {
    slug: 'internal-operations',
    tag: { en: 'Internal Operations', es: 'Operaciones Internas' },
    title: { en: 'AI Agents for Internal Operations', es: 'Agentes de IA para Operaciones Internas' },
    tagline: {
      en: 'Automate the repetitive. Free your team for work that actually matters.',
      es: 'Automatizá lo repetitivo. Liberá a tu equipo para el trabajo que realmente importa.',
    },
    heroDesc: {
      en: 'Every company has a layer of invisible, repetitive work: emails to classify, invoices to process, reports to compile, stock to update. This work is done by your best people — and it\'s killing their productivity. We deploy agents that handle it completely, so your team can focus on decisions, relationships, and strategy.',
      es: 'Toda empresa tiene una capa de trabajo invisible y repetitivo: emails a clasificar, facturas a procesar, reportes a armar, stock a actualizar. Este trabajo lo hace tu mejor gente — y destroza su productividad. Desplegamos agentes que lo manejan de forma completa, para que tu equipo se enfoque en decisiones, relaciones y estrategia.',
    },
    problems: {
      en: [
        'Your team spends 2–3 hours a day on email triage, data entry, and manual reporting',
        'Invoice and document processing is slow, error-prone, and creates accounting bottlenecks',
        'Critical business data lives in silos — systems that never talk to each other',
      ],
      es: [
        'Tu equipo gasta 2–3 horas al día en clasificar emails, cargar datos y armar reportes manuales',
        'El procesamiento de facturas y documentos es lento, propenso a errores y crea cuellos de botella contables',
        'Los datos críticos del negocio viven en silos — sistemas que nunca se comunican entre sí',
      ],
    },
    capabilities: {
      en: [
        'Email triage: classify, prioritize, draft replies, and route to the right team',
        'Invoice processing: extract, validate, and push data to your accounting system',
        'Automated operational reports delivered on schedule to Slack or email',
        'Stock alerts and reorder triggers based on inventory thresholds',
        'Payment reminders sent automatically to customers with overdue balances',
        'Cross-system data sync: keep CRM, ERP, and spreadsheets in agreement',
      ],
      es: [
        'Clasificación de emails: categoriza, prioriza, redacta respuestas y deriva al equipo correcto',
        'Procesamiento de facturas: extrae, valida y envía datos a tu sistema contable',
        'Reportes operativos automáticos entregados en horario fijo por Slack o email',
        'Alertas de stock y disparadores de reposición basados en umbrales de inventario',
        'Recordatorios de pago enviados automáticamente a clientes con saldo vencido',
        'Sincronización de datos entre sistemas: mantiene CRM, ERP y hojas de cálculo alineados',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'A logistics company processes 200+ supplier invoices per month. Each one requires manual extraction, matching against purchase orders, approval routing, and entry into their ERP. Two accountants spend 40% of their week on this task alone.',
        es: 'Una empresa de logística procesa más de 200 facturas de proveedores por mes. Cada una requiere extracción manual, matching con órdenes de compra, routing de aprobación y carga en el ERP. Dos contadores dedican el 40% de su semana solo a esta tarea.',
      },
      outcome: {
        en: 'We deploy a document processing agent that reads every invoice from email or cloud storage, extracts line items using vision AI, matches them to the corresponding PO, flags discrepancies for human review, and pushes approved data to the ERP — all automatically. Processing time drops from 8 minutes to under 40 seconds per invoice.',
        es: 'Desplegamos un agente de procesamiento de documentos que lee cada factura del email o almacenamiento cloud, extrae los ítems con IA de visión, los matchea con la orden de compra correspondiente, marca las discrepancias para revisión humana y envía los datos aprobados al ERP — todo automáticamente. El tiempo por factura baja de 8 minutos a menos de 40 segundos.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Workflow audit & process mapping', es: 'Auditoría de flujos y mapeo de procesos' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Agent build & document schema', es: 'Construcción del agente y schema de documentos' }, duration: { en: '4–6 days', es: '4–6 días' } },
        { name: { en: 'ERP/accounting integration', es: 'Integración ERP/contabilidad' }, duration: { en: '2–4 days', es: '2–4 días' } },
        { name: { en: 'Go live & monitoring', es: 'Lanzamiento y monitoreo' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['GPT-5 Vision', 'SAP / QuickBooks / Xero', 'Google Drive / Dropbox', 'Slack'],
    metric1: { value: '95%', label: { en: 'extraction accuracy', es: 'precisión de extracción' } },
    metric2: { value: '10×', label: { en: 'faster document processing', es: 'procesamiento de documentos más rápido' } },
    metric3: { value: '0', label: { en: 'manual reporting hours/week', es: 'horas de reportes manuales/semana' } },
  },
  {
    slug: 'marketing-content',
    tag: { en: 'Marketing & Content', es: 'Marketing y Contenido' },
    title: { en: 'AI Agents for Marketing & Content', es: 'Agentes de IA para Marketing y Contenido' },
    tagline: {
      en: 'Produce more content. Know your market. Run faster campaigns.',
      es: 'Producí más contenido. Conocé tu mercado. Lanzá campañas más rápido.',
    },
    heroDesc: {
      en: 'Great marketing requires consistent output, sharp market intelligence, and fast execution. Most teams have the ideas — but not the bandwidth. We deploy agents that draft, repurpose, monitor, and brief so your marketing team can focus on strategy and creative direction.',
      es: 'El buen marketing requiere output constante, inteligencia de mercado precisa y ejecución rápida. La mayoría de los equipos tienen las ideas — pero no el tiempo. Desplegamos agentes que redactan, reutilizan, monitorean y briefean para que tu equipo de marketing se enfoque en estrategia y dirección creativa.',
    },
    problems: {
      en: [
        'Content production is a bottleneck — you have ideas but not enough time to execute',
        'You have no systematic view of what competitors are publishing, pricing, or promoting',
        'Campaign briefs take days to write, creating delays between strategy and production',
      ],
      es: [
        'La producción de contenido es un cuello de botella — tenés las ideas pero no el tiempo para ejecutarlas',
        'No tenés una vista sistemática de lo que publican, cobran o promocionan tus competidores',
        'Los briefs de campaña tardan días en escribirse, generando demoras entre la estrategia y la producción',
      ],
    },
    capabilities: {
      en: [
        'Social media drafts in your brand voice, from a brief or repurposed from existing content',
        'Blog-to-10-formats: one article becomes tweets, a newsletter, LinkedIn posts, and an email sequence',
        'Weekly competitor intelligence: pricing changes, new features, messaging shifts',
        'Campaign briefing in 10 minutes: objective → audience → message hierarchy → channels → KPIs',
        'Sentiment monitoring: track brand mentions and customer sentiment across social and review sites',
        'Trend digests: curated summaries of industry news delivered every morning',
      ],
      es: [
        'Borradores para redes sociales en la voz de tu marca, desde un brief o reutilizando contenido existente',
        'Blog-a-10-formatos: un artículo se convierte en tweets, newsletter, posts de LinkedIn y una secuencia de emails',
        'Inteligencia competitiva semanal: cambios de precios, nuevas funcionalidades, cambios de mensaje',
        'Brief de campaña en 10 minutos: objetivo → audiencia → jerarquía de mensajes → canales → KPIs',
        'Monitoreo de sentimiento: seguimiento de menciones y sentimiento del cliente en redes y sitios de reseñas',
        'Resúmenes de tendencias: noticias del sector curadas entregadas cada mañana',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'An e-commerce brand publishes 2–3 blog posts per month and wants to increase content output to 5× without hiring. Their marketing manager spends 3 hours per piece on research, drafting, and reformatting for different channels.',
        es: 'Una marca de e-commerce publica 2–3 blog posts por mes y quiere aumentar el output de contenido 5× sin contratar. Su marketing manager gasta 3 horas por pieza en investigación, redacción y reformateo para distintos canales.',
      },
      outcome: {
        en: 'We deploy a content agent that takes a keyword or topic brief, researches the top-ranking content, drafts a full blog post in the brand\'s tone, and simultaneously generates 5 tweets, a LinkedIn post, an email newsletter blurb, and an Instagram caption — in under 15 minutes. The manager\'s job shifts to editing and approval.',
        es: 'Desplegamos un agente de contenido que toma un brief de keyword o tema, investiga el contenido más rankeado, redacta un blog post completo en el tono de la marca y genera simultáneamente 5 tweets, un post de LinkedIn, un blurb de newsletter y un caption de Instagram — en menos de 15 minutos. El trabajo del manager pasa a edición y aprobación.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Brand voice & tone calibration', es: 'Calibración de voz y tono de marca' }, duration: { en: '1–2 days', es: '1–2 días' } },
        { name: { en: 'Agent build & template creation', es: 'Construcción del agente y creación de plantillas' }, duration: { en: '3–5 days', es: '3–5 días' } },
        { name: { en: 'Channel integrations', es: 'Integraciones de canales' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Go live & tuning', es: 'Lanzamiento y ajuste' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['GPT-5', 'Notion / any CMS', 'Buffer / Hootsuite', 'Slack / email'],
    metric1: { value: '5×', label: { en: 'content output increase', es: 'aumento de output de contenido' } },
    metric2: { value: '<15min', label: { en: 'from brief to multi-channel content', es: 'de brief a contenido multicanal' } },
    metric3: { value: '100%', label: { en: 'competitor signals captured weekly', es: 'señales competitivas capturadas semanalmente' } },
  },
  {
    slug: 'human-resources',
    tag: { en: 'Human Resources', es: 'Recursos Humanos' },
    title: { en: 'AI Agents for Human Resources', es: 'Agentes de IA para Recursos Humanos' },
    tagline: {
      en: 'Better hiring. Faster onboarding. An HR team that scales.',
      es: 'Mejor contratación. Onboarding más rápido. Un equipo de RRHH que escala.',
    },
    heroDesc: {
      en: 'HR teams carry a disproportionate volume of repetitive, time-sensitive work: screening hundreds of CVs, answering the same employee questions, running onboarding processes, and coordinating interviews. We deploy agents that handle the operational layer so your HR professionals can focus on culture, retention, and strategic people decisions.',
      es: 'Los equipos de RRHH cargan con un volumen desproporcionado de trabajo repetitivo y urgente: revisar cientos de CVs, responder las mismas preguntas de empleados, ejecutar procesos de onboarding y coordinar entrevistas. Desplegamos agentes que manejan la capa operativa para que tus profesionales de RRHH se enfoquen en cultura, retención y decisiones estratégicas de personas.',
    },
    problems: {
      en: [
        'Screening 100+ CVs per open role takes 2–3 days and is inconsistent across reviewers',
        'New hires flood HR with the same 30 questions during their first month',
        'HR policy and benefit questions repeat constantly — pulling senior HR time away from strategic work',
      ],
      es: [
        'Revisar 100+ CVs por puesto abierto tarda 2–3 días y es inconsistente entre revisores',
        'Los empleados nuevos inundan a RRHH con las mismas 30 preguntas durante su primer mes',
        'Las preguntas sobre políticas y beneficios se repiten constantemente — robando tiempo de RRHH a trabajo estratégico',
      ],
    },
    capabilities: {
      en: [
        'Resume screening: score and rank CVs against your job spec automatically',
        'Interview coordination: schedule candidates across calendars without human back-and-forth',
        '30-day onboarding agent on Slack: answers questions, assigns tasks, tracks completion',
        'HR FAQ bot: answers policy, payroll, benefits, and PTO questions 24/7',
        'Internal climate pulse surveys: automated, anonymous, with sentiment summary',
        'Performance tracking reminders: nudge managers and employees on check-ins and goal reviews',
      ],
      es: [
        'Screening de CVs: puntúa y rankea candidatos contra tu descripción del puesto automáticamente',
        'Coordinación de entrevistas: agenda candidatos entre calendarios sin negociaciones humanas',
        'Agente de onboarding de 30 días en Slack: responde preguntas, asigna tareas, rastrea el completado',
        'Bot de FAQ de RRHH: responde preguntas de políticas, liquidación, beneficios y vacaciones 24/7',
        'Encuestas de clima interno: automatizadas, anónimas, con resumen de sentimiento',
        'Recordatorios de seguimiento de performance: impulsa a managers y empleados en check-ins y revisiones de objetivos',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'A tech company with 150 employees has 2 HR professionals. During a period of rapid growth, they receive 400+ applications per open role. Each CV review takes 5–7 minutes. Two open roles means 4,000+ minutes of screening work — before the first interview is even scheduled.',
        es: 'Una empresa de tecnología con 150 empleados tiene 2 profesionales de RRHH. Durante un período de crecimiento rápido, reciben 400+ solicitudes por puesto abierto. Cada revisión de CV toma 5–7 minutos. Dos puestos abiertos significan 4.000+ minutos de trabajo de screening — antes de agendar la primera entrevista.',
      },
      outcome: {
        en: 'We deploy a CV screening agent that reads every application against the job spec, scores candidates on 6 criteria (experience match, skill coverage, seniority alignment, etc.), flags top 20%, and produces a ranked shortlist with a structured summary per candidate. HR reviews 20 candidates instead of 400. Time-to-interview drops from 5 days to 4 hours.',
        es: 'Desplegamos un agente de screening que lee cada postulación contra el spec del puesto, puntúa candidatos en 6 criterios (match de experiencia, cobertura de skills, alineación de seniority, etc.), marca el top 20% y produce un shortlist rankeado con resumen estructurado por candidato. RRHH revisa 20 candidatos en lugar de 400. El tiempo hasta la primera entrevista baja de 5 días a 4 horas.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Process mapping & criteria definition', es: 'Mapeo de procesos y definición de criterios' }, duration: { en: '1–2 days', es: '1–2 días' } },
        { name: { en: 'Agent build & ATS integration', es: 'Construcción del agente e integración con ATS' }, duration: { en: '3–5 days', es: '3–5 días' } },
        { name: { en: 'Slack / HRIS integration', es: 'Integración con Slack / HRIS' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Go live & calibration', es: 'Lanzamiento y calibración' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['GPT-5', 'Slack', 'any ATS', 'Google Calendar'],
    metric1: { value: '80%', label: { en: 'less CV screening time', es: 'menos tiempo de screening de CVs' } },
    metric2: { value: '4h', label: { en: 'to shortlist (was 5 days)', es: 'para el shortlist (antes 5 días)' } },
    metric3: { value: '70%', label: { en: 'of HR queries automated', es: 'de consultas de RRHH automatizadas' } },
  },
  {
    slug: 'data-research',
    tag: { en: 'Data & Research', es: 'Datos e Investigación' },
    title: { en: 'AI Agents for Data & Research', es: 'Agentes de IA para Datos e Investigación' },
    tagline: {
      en: 'Extract insight from your data. Monitor the market. Stop building reports by hand.',
      es: 'Extraé insights de tus datos. Monitoreá el mercado. Dejá de armar reportes a mano.',
    },
    heroDesc: {
      en: 'Data is your most underused asset. It sits in databases, spreadsheets, and BI tools — and extracting insight from it requires technical skills most business teams don\'t have, or hours of manual work that nobody wants to do. We deploy agents that analyze your data in natural language, monitor external signals, and deliver intelligence automatically.',
      es: 'Los datos son tu activo más desaprovechado. Están en bases de datos, hojas de cálculo y BI tools — y extraer insights de ellos requiere skills técnicos que la mayoría de los equipos de negocio no tienen, o horas de trabajo manual que nadie quiere hacer. Desplegamos agentes que analizan tus datos en lenguaje natural, monitorean señales externas y entregan inteligencia de forma automática.',
    },
    problems: {
      en: [
        'Business leaders need data answers fast but depend on data analysts who have a 3-day queue',
        'Market intelligence arrives too late — industry shifts are noticed weeks after they happen',
        'Monthly financial and operational reports take 2–3 days to compile every cycle',
      ],
      es: [
        'Los líderes de negocio necesitan respuestas de datos rápido pero dependen de analistas con una cola de 3 días',
        'La inteligencia de mercado llega demasiado tarde — los cambios del sector se detectan semanas después de que ocurren',
        'Los reportes financieros y operativos mensuales tardan 2–3 días en armarse cada ciclo',
      ],
    },
    capabilities: {
      en: [
        'Natural language querying: ask your database "What were our top 5 products by margin last quarter?" and get an answer in seconds',
        'CSV, Excel, and database analysis without writing a single line of SQL',
        'Daily industry news monitoring with AI-curated summaries delivered to your inbox',
        'Competitive benchmarking: automated price, feature, and messaging comparison across competitors',
        'Automated financial reports: actuals vs. budget, cash flow, top expense categories',
        'Pattern detection: anomaly alerts when metrics deviate from expected ranges',
      ],
      es: [
        'Consultas en lenguaje natural: preguntá a tu base de datos "¿Cuáles fueron nuestros 5 productos de mayor margen el último trimestre?" y obtenés una respuesta en segundos',
        'Análisis de CSV, Excel y bases de datos sin escribir una sola línea de SQL',
        'Monitoreo diario de noticias del sector con resúmenes curados por IA entregados a tu bandeja de entrada',
        'Benchmarking competitivo: comparación automatizada de precios, funcionalidades y mensajes entre competidores',
        'Reportes financieros automáticos: reales vs. presupuesto, flujo de caja, categorías de gasto principales',
        'Detección de patrones: alertas de anomalías cuando las métricas se desvían de rangos esperados',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'A retail chain with 12 locations compiles a Monday performance report for leadership every week. The process involves pulling sales data from their POS, inventory from their ERP, and customer data from their CRM — then merging everything in Excel, calculating KPIs manually, and formatting a PowerPoint. It takes one analyst a full day.',
        es: 'Una cadena de retail con 12 locales arma un reporte de performance del lunes para la dirección cada semana. El proceso implica extraer datos de ventas del POS, inventario del ERP y datos de clientes del CRM — luego mergear todo en Excel, calcular KPIs manualmente y formatear un PowerPoint. Le lleva a un analista un día completo.',
      },
      outcome: {
        en: 'We deploy a reporting agent that connects to all three data sources, pulls the required metrics on Sunday night, calculates all KPIs automatically, formats the report to the company\'s template, and sends it to the leadership Slack channel by 7am Monday. The analyst\'s time is redirected to analyzing anomalies rather than building the report.',
        es: 'Desplegamos un agente de reportes que se conecta a las tres fuentes de datos, extrae las métricas requeridas el domingo a la noche, calcula todos los KPIs automáticamente, formatea el reporte con la plantilla de la empresa y lo envía al canal de Slack de dirección a las 7am del lunes. El tiempo del analista se redirige a analizar anomalías en lugar de armar el reporte.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Data source audit & schema mapping', es: 'Auditoría de fuentes de datos y mapeo de schema' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Agent build & query engineering', es: 'Construcción del agente e ingeniería de consultas' }, duration: { en: '4–7 days', es: '4–7 días' } },
        { name: { en: 'Report templates & delivery setup', es: 'Plantillas de reportes y configuración de entrega' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Go live & validation', es: 'Lanzamiento y validación' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['GPT-5 Code Interpreter', 'BigQuery / PostgreSQL', 'Google Sheets / Excel', 'Slack / email'],
    metric1: { value: '<10s', label: { en: 'to answer a business data question', es: 'para responder una pregunta de datos del negocio' } },
    metric2: { value: '0h', label: { en: 'manual report compilation', es: 'compilación manual de reportes' } },
    metric3: { value: 'Daily', label: { en: 'competitive intelligence delivered', es: 'inteligencia competitiva entregada' } },
  },
  {
    slug: 'engineering-product',
    tag: { en: 'Engineering & Product', es: 'Programación y Producto' },
    title: { en: 'AI Agents for Engineering & Product', es: 'Agentes de IA para Programación y Producto' },
    tagline: {
      en: 'Ship faster. Review smarter. Keep documentation alive.',
      es: 'Entregá más rápido. Revisá más inteligente. Mantené la documentación viva.',
    },
    heroDesc: {
      en: 'Engineering teams face a constant tax: boilerplate to write, PRs waiting in the queue, documentation that falls out of date the moment it\'s published. These are solved problems. We deploy coding agents that integrate into your existing workflow — your stack, your conventions, your CI/CD — and eliminate the work that shouldn\'t require a senior engineer.',
      es: 'Los equipos de ingeniería enfrentan un impuesto constante: boilerplate que escribir, PRs esperando en la cola, documentación que queda desactualizada en el momento en que se publica. Estos son problemas resueltos. Desplegamos agentes de código que se integran a tu flujo de trabajo existente — tu stack, tus convenciones, tu CI/CD — y eliminan el trabajo que no debería requerir un ingeniero senior.',
    },
    problems: {
      en: [
        'Your team writes the same frontend/backend boilerplate every sprint — 20–30% of dev time is pure repetition',
        'PRs sit unreviewed for 1–3 days, blocking the entire delivery pipeline',
        'Documentation is always out of date — new hires can\'t self-serve and senior devs spend hours on knowledge transfer',
      ],
      es: [
        'Tu equipo escribe el mismo boilerplate de frontend/backend cada sprint — el 20–30% del tiempo de desarrollo es pura repetición',
        'Los PRs esperan sin revisión 1–3 días, bloqueando todo el pipeline de entrega',
        'La documentación siempre está desactualizada — los nuevos devs no pueden auto-resolverse y los seniors gastan horas en transferencia de conocimiento',
      ],
    },
    capabilities: {
      en: [
        'Code generation from spec: take a ticket or Figma design and produce production-ready code',
        'Automated PR review: flag bugs, security issues, and style violations with line-level comments',
        'Test generation: write unit and E2E tests from an existing module or functional requirement',
        'Documentation agent: auto-update README, API specs, and internal wiki when code changes',
        'Tech debt detection: scan the codebase and produce a prioritized remediation plan',
        'Onboarding agent: answers codebase questions for new developers on Slack',
      ],
      es: [
        'Generación de código desde spec: tomá un ticket o un diseño de Figma y producí código listo para producción',
        'Code review automatizado: marca bugs, problemas de seguridad y violaciones de estilo con comentarios a nivel de línea',
        'Generación de tests: escribe tests unitarios y E2E desde un módulo existente o un requisito funcional',
        'Agente de documentación: actualiza automáticamente README, specs de API y wiki interna cuando cambia el código',
        'Detección de deuda técnica: escanea el codebase y produce un plan de remediación priorizado',
        'Agente de onboarding: responde preguntas del codebase para nuevos desarrolladores en Slack',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'A SaaS startup has 8 engineers. Every feature requires 2–4 hours of boilerplate setup (component scaffolding, API endpoint creation, test file setup, documentation stub). The team also has a 48-hour average PR review time because the lead engineer is a bottleneck for all code reviews.',
        es: 'Una startup SaaS tiene 8 ingenieros. Cada funcionalidad requiere 2–4 horas de setup de boilerplate (scaffolding de componentes, creación de endpoints de API, setup de archivos de test, stub de documentación). El equipo también tiene un tiempo promedio de revisión de PR de 48 horas porque el lead engineer es el cuello de botella de todas las revisiones de código.',
      },
      outcome: {
        en: 'We deploy two agents: a code generation agent that reads the ticket, generates the component, endpoint, and test file in the team\'s exact stack and conventions (React, TypeScript, Jest, Express); and a PR review agent integrated into GitHub Actions that reviews every PR within 3 minutes, posting structured comments by file and line. The lead engineer now reviews only the edge cases the agent flags as high-severity.',
        es: 'Desplegamos dos agentes: un agente de generación de código que lee el ticket, genera el componente, el endpoint y el archivo de test en el stack y convenciones exactas del equipo (React, TypeScript, Jest, Express); y un agente de code review integrado en GitHub Actions que revisa cada PR en 3 minutos, publicando comentarios estructurados por archivo y línea. El lead engineer ahora solo revisa los casos límite que el agente marca como alta severidad.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Codebase audit & convention mapping', es: 'Auditoría del codebase y mapeo de convenciones' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Agent build & CI/CD integration', es: 'Construcción del agente e integración CI/CD' }, duration: { en: '5–8 days', es: '5–8 días' } },
        { name: { en: 'GitHub Actions / Slack wiring', es: 'Configuración de GitHub Actions / Slack' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'Go live & calibration', es: 'Lanzamiento y calibración' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['GPT-5 / Claude 4 Sonnet', 'GitHub Actions', 'Slack', 'Jest / Playwright'],
    metric1: { value: '3min', label: { en: 'PR review time (was 48h)', es: 'tiempo de PR review (antes 48h)' } },
    metric2: { value: '3–5×', label: { en: 'faster feature delivery', es: 'entrega de features más rápida' } },
    metric3: { value: '100%', label: { en: 'PRs reviewed automatically', es: 'PRs revisados automáticamente' } },
  },
  {
    slug: 'integrations-automations',
    tag: { en: 'Integrations & Automations', es: 'Integraciones y Automatizaciones' },
    title: { en: 'AI Agents for Integrations & Automations', es: 'Agentes de IA para Integraciones y Automatizaciones' },
    tagline: {
      en: 'Connect your systems. Eliminate manual workflows. Let your data flow.',
      es: 'Conectá tus sistemas. Eliminá los flujos manuales. Dejá que tus datos fluyan.',
    },
    heroDesc: {
      en: 'Most businesses run on 10–20 different tools that don\'t talk to each other. The gaps between them are filled with manual exports, copy-paste tasks, and spreadsheet bridges maintained by one person who might leave tomorrow. We deploy integration agents that close those gaps permanently — keeping data in sync, automating cross-platform workflows, and alerting the right people at the right moment.',
      es: 'La mayoría de los negocios operan con 10–20 herramientas distintas que no se comunican entre sí. Las brechas entre ellas se llenan con exportaciones manuales, tareas de copy-paste y puentes en hojas de cálculo mantenidos por una persona que podría irse mañana. Desplegamos agentes de integración que cierran esas brechas de forma permanente — manteniendo datos sincronizados, automatizando flujos entre plataformas y alertando a las personas correctas en el momento correcto.',
    },
    problems: {
      en: [
        'You manually export data from one system and import it into another — every single day',
        'A closed deal in the CRM takes 2 hours to reflect in the ERP, billing system, and project management tool',
        'You miss critical business alerts because nobody is monitoring the data 24/7',
      ],
      es: [
        'Exportás datos de un sistema y los importás en otro manualmente — todos los días',
        'Un negocio cerrado en el CRM tarda 2 horas en reflejarse en el ERP, el sistema de facturación y la herramienta de gestión de proyectos',
        'Te perdés alertas críticas de negocio porque nadie monitorea los datos las 24 horas',
      ],
    },
    capabilities: {
      en: [
        'CRM ↔ ERP bi-directional sync with field-level mapping and conflict resolution',
        'Webhook listeners: trigger cross-platform action chains from any event in any system',
        'Smart alerts: monitor KPIs and send context-rich notifications to Slack, email, or PagerDuty',
        'Automated CRM update after every call, meeting, or email interaction',
        'Lead enrichment from LinkedIn, Clearbit, or public data — automatically on new records',
        'Scheduled reports and data delivery across teams, formatted and on time',
      ],
      es: [
        'Sincronización bidireccional CRM ↔ ERP con mapeo de campos y resolución de conflictos',
        'Listeners de webhooks: disparar cadenas de acciones entre plataformas desde cualquier evento en cualquier sistema',
        'Alertas inteligentes: monitorear KPIs y enviar notificaciones con contexto completo a Slack, email o PagerDuty',
        'Actualización automática del CRM después de cada llamada, reunión o interacción de email',
        'Enriquecimiento de leads desde LinkedIn, Clearbit o datos públicos — automáticamente en nuevos registros',
        'Reportes programados y entrega de datos entre equipos, formateados y a tiempo',
      ],
    },
    useCase: {
      label: { en: 'Real-world scenario', es: 'Escenario real' },
      scenario: {
        en: 'A B2B software company uses HubSpot as their CRM, Xero for accounting, and Jira for project management. When a deal closes, a sales rep manually creates the client in Xero, opens a new Jira project, and sends a welcome email. This process takes 40 minutes per new client and is prone to errors and omissions.',
        es: 'Una empresa de software B2B usa HubSpot como CRM, Xero para contabilidad y Jira para gestión de proyectos. Cuando se cierra un negocio, un representante de ventas crea manualmente el cliente en Xero, abre un nuevo proyecto en Jira y envía un email de bienvenida. Este proceso lleva 40 minutos por nuevo cliente y es propenso a errores y omisiones.',
      },
      outcome: {
        en: 'We deploy an integration agent that listens for the "Deal Closed Won" event in HubSpot, automatically creates the client record in Xero with correct billing details, spins up a Jira project from the company\'s template, sends the onboarding email to the client, and notifies the delivery team in Slack — all in under 90 seconds. Zero manual steps. Zero omissions.',
        es: 'Desplegamos un agente de integración que escucha el evento "Deal Closed Won" en HubSpot, crea automáticamente el registro del cliente en Xero con los datos de facturación correctos, crea un proyecto en Jira desde la plantilla de la empresa, envía el email de onboarding al cliente y notifica al equipo de delivery en Slack — todo en menos de 90 segundos. Sin pasos manuales. Sin omisiones.',
      },
    },
    timeline: {
      label: { en: 'Deployment timeline', es: 'Tiempo de despliegue' },
      phases: [
        { name: { en: 'Systems audit & flow mapping', es: 'Auditoría de sistemas y mapeo de flujos' }, duration: { en: '2–3 days', es: '2–3 días' } },
        { name: { en: 'API connections & data schema', es: 'Conexiones de API y schema de datos' }, duration: { en: '4–6 days', es: '4–6 días' } },
        { name: { en: 'Webhook listeners & action chains', es: 'Listeners de webhooks y cadenas de acciones' }, duration: { en: '2–4 days', es: '2–4 días' } },
        { name: { en: 'Go live & stress testing', es: 'Lanzamiento y stress testing' }, duration: { en: 'Week 2–3', es: 'Semana 2–3' } },
      ],
    },
    stack: ['Custom agents', 'REST / GraphQL APIs', 'Webhooks', 'Make / Zapier (optional)'],
    metric1: { value: '<90s', label: { en: 'multi-system propagation (was 40min)', es: 'propagación entre sistemas (antes 40min)' } },
    metric2: { value: '100%', label: { en: 'data consistency across platforms', es: 'consistencia de datos entre plataformas' } },
    metric3: { value: '0', label: { en: 'manual data exports/day', es: 'exportaciones manuales de datos/día' } },
  },
];
