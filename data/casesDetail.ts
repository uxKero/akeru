export interface CaseDetail {
  slug: string;
  industry: { en: string; es: string };
  tag: { en: string; es: string };
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  challenge: {
    intro: { en: string; es: string };
    points: { en: string[]; es: string[] };
  };
  solution: {
    intro: { en: string; es: string };
    steps: Array<{ title: { en: string; es: string }; desc: { en: string; es: string } }>;
  };
  results: Array<{ value: string; label: { en: string; es: string } }>;
  quote: {
    text: { en: string; es: string };
    author: string;
    role: { en: string; es: string };
    company: string;
  };
  stack: string[];
  timeline: { en: string; es: string };
  workModel: { en: string; es: string };
}

export const casesDetail: CaseDetail[] = [
  {
    slug: 'real-estate-prequalification',
    industry: { en: 'Real Estate', es: 'Inmobiliaria' },
    tag: { en: 'Sales', es: 'Ventas' },
    title: {
      en: 'Real Estate Pre-Qualification Automation',
      es: 'Automatización de Pre-Calificación Inmobiliaria',
    },
    tagline: {
      en: 'How a real estate agency qualified 3× more leads per day — without hiring a single new sales rep.',
      es: 'Cómo una agencia inmobiliaria calificó 3× más leads por día — sin contratar un solo nuevo vendedor.',
    },
    challenge: {
      intro: {
        en: 'A mid-size real estate agency in Buenos Aires was generating 80–120 inbound inquiries per day across WhatsApp, their website, and Instagram DMs. Their 4-person sales team was responsible for manually qualifying every lead — asking about property preferences, budget range, financing status, and availability for a visit.',
        es: 'Una agencia inmobiliaria mediana en Buenos Aires recibía 80–120 consultas entrantes por día en WhatsApp, su web e Instagram DMs. Su equipo de ventas de 4 personas era responsable de calificar manualmente cada lead — preguntando sobre preferencias de propiedad, rango de presupuesto, estado del financiamiento y disponibilidad para visitas.',
      },
      points: {
        en: [
          'The average response time to a new inquiry was 4–6 hours — by which point many leads had already contacted competitors',
          'Each qualification conversation took 15–25 minutes of a sales rep\'s time, leaving little bandwidth for follow-up with warm leads',
          'Leads from evening and weekend hours were never contacted until the next business day — a 12–16 hour gap',
          'No structured data was captured: the team had no reliable way to segment leads by budget, intent, or urgency',
        ],
        es: [
          'El tiempo de respuesta promedio a una consulta nueva era de 4–6 horas — momento en que muchos leads ya habían contactado a la competencia',
          'Cada conversación de calificación le tomaba 15–25 minutos a un vendedor, dejando poco tiempo para el seguimiento con leads calientes',
          'Los leads de la tarde y los fines de semana nunca se contactaban hasta el siguiente día hábil — una brecha de 12–16 horas',
          'No se capturaban datos estructurados: el equipo no tenía una forma confiable de segmentar leads por presupuesto, intención o urgencia',
        ],
      },
    },
    solution: {
      intro: {
        en: 'We designed and deployed a multi-step pre-qualification agent integrated into their WhatsApp Business and website chat. The agent operates as the first point of contact for every inbound inquiry, around the clock.',
        es: 'Diseñamos y desplegamos un agente de pre-calificación multi-paso integrado en su WhatsApp Business y chat web. El agente opera como el primer punto de contacto para cada consulta entrante, las 24 horas.',
      },
      steps: [
        {
          title: { en: 'Instant greeting and intent detection', es: 'Saludo instantáneo y detección de intención' },
          desc: {
            en: 'The agent greets every new contact within 3 seconds, identifies whether they\'re looking to buy, rent, or sell, and adapts the conversation flow accordingly.',
            es: 'El agente saluda a cada nuevo contacto en 3 segundos, identifica si busca comprar, alquilar o vender, y adapta el flujo de conversación en consecuencia.',
          },
        },
        {
          title: { en: 'Structured 5-question qualification flow', es: 'Flujo de calificación estructurado de 5 preguntas' },
          desc: {
            en: 'The agent asks about property type preference, desired zones, budget range, financing status (cash, mortgage pre-approval, or exploring options), and visit availability — capturing everything in structured form.',
            es: 'El agente pregunta sobre tipo de propiedad preferido, zonas deseadas, rango de presupuesto, estado del financiamiento (efectivo, pre-aprobación hipotecaria o explorando opciones) y disponibilidad para visitas — capturando todo en formato estructurado.',
          },
        },
        {
          title: { en: 'Automatic scoring and CRM sync', es: 'Puntuación automática y sincronización con CRM' },
          desc: {
            en: 'Based on the responses, the agent scores the lead (Hot / Warm / Cold) and immediately creates or updates the contact record in their CRM with all captured data, including the full conversation transcript.',
            es: 'En base a las respuestas, el agente puntúa el lead (Caliente / Tibio / Frío) e inmediatamente crea o actualiza el registro de contacto en su CRM con todos los datos capturados, incluyendo la transcripción completa de la conversación.',
          },
        },
        {
          title: { en: 'Sales rep notification and handoff', es: 'Notificación al vendedor y traspaso' },
          desc: {
            en: 'Hot leads trigger an immediate Slack notification to the assigned sales rep with the full lead profile. The agent schedules the property tour directly in their calendar. Warm leads enter a follow-up sequence. Cold leads receive nurture content.',
            es: 'Los leads calientes disparan una notificación inmediata en Slack al vendedor asignado con el perfil completo del lead. El agente agenda directamente la visita a la propiedad en su calendario. Los leads tibios entran en una secuencia de seguimiento. Los fríos reciben contenido de nurturing.',
          },
        },
      ],
    },
    results: [
      { value: '<3min', label: { en: 'average first response time (was 4–6h)', es: 'tiempo de primera respuesta (antes 4–6h)' } },
      { value: '3×', label: { en: 'more leads qualified per day', es: 'más leads calificados por día' } },
      { value: '+38%', label: { en: 'increase in property tours booked', es: 'aumento en visitas a propiedades agendadas' } },
      { value: '4h', label: { en: 'saved per sales rep per day', es: 'ahorradas por vendedor por día' } },
    ],
    quote: {
      text: {
        en: 'Before, our team was spending most of their morning just responding to WhatsApp messages. Now those leads arrive pre-qualified, scored, and already with a visit scheduled. Our sales reps only deal with people who are genuinely ready to buy.',
        es: 'Antes, nuestro equipo pasaba la mayor parte de la mañana respondiendo mensajes de WhatsApp. Ahora esos leads llegan pre-calificados, puntuados y con una visita ya agendada. Nuestros vendedores solo tratan con personas que realmente están listas para comprar.',
      },
      author: 'Valentina Cruz',
      role: { en: 'Sales Director', es: 'Directora Comercial' },
      company: 'Horizon Properties',
    },
    stack: ['GPT-5', 'WhatsApp', 'any CRM', 'Slack', 'Google Calendar'],
    timeline: { en: 'Live in 2–3 weeks', es: 'Activo en 2–3 semanas' },
    workModel: { en: 'Ongoing Partner', es: 'Socio Continuo' },
  },
  {
    slug: 'technical-triage-24-7',
    industry: { en: 'SaaS / Technology', es: 'SaaS / Tecnología' },
    tag: { en: 'Support', es: 'Soporte' },
    title: {
      en: '24/7 Technical Triage Agent',
      es: 'Agente de Triage Técnico 24/7',
    },
    tagline: {
      en: 'How a SaaS company cut ticket resolution time by 65% and stopped losing customers to slow support.',
      es: 'Cómo una empresa SaaS redujo el tiempo de resolución de tickets en un 65% y dejó de perder clientes por soporte lento.',
    },
    challenge: {
      intro: {
        en: 'A B2B SaaS platform with 1,200 active business clients was running a 3-person technical support team. As the product grew in complexity and the client base expanded to international markets, the support queue began to overwhelm the team — particularly during off-hours for the Argentine-based team.',
        es: 'Una plataforma SaaS B2B con 1.200 clientes empresariales activos contaba con un equipo de soporte técnico de 3 personas. A medida que el producto crecía en complejidad y la base de clientes se expandía a mercados internacionales, la cola de soporte comenzó a abrumar al equipo — particularmente fuera del horario de la Argentina.',
      },
      points: {
        en: [
          '68% of all support tickets were tier-1 issues: password resets, API key questions, how-to usage, billing questions — all solvable without engineering',
          'Average first response time was 6.5 hours, creating frustration and churn risk for paying clients in EU and US time zones',
          'The support team spent 60% of their time on repetitive issues, leaving no bandwidth for complex technical escalations',
          'There was no triage system: urgent production issues sat in the same queue as basic questions, often waiting hours',
        ],
        es: [
          'El 68% de todos los tickets eran problemas de nivel 1: restablecimiento de contraseñas, preguntas sobre API keys, uso del producto, preguntas de facturación — todos solucionables sin ingeniería',
          'El tiempo de primera respuesta promedio era de 6.5 horas, generando frustración y riesgo de churn para clientes de pago en zonas horarias de Europa y EEUU',
          'El equipo de soporte pasaba el 60% de su tiempo en problemas repetitivos, sin ancho de banda para escalados técnicos complejos',
          'No existía un sistema de triage: los problemas urgentes de producción esperaban en la misma cola que las preguntas básicas, a menudo durante horas',
        ],
      },
    },
    solution: {
      intro: {
        en: 'We deployed a technical triage agent integrated into their existing Zendesk instance and their in-app help widget. The agent operates 24/7, handles tier-1 issues autonomously, and intelligently escalates everything else.',
        es: 'Desplegamos un agente de triage técnico integrado en su instancia de Zendesk existente y en su widget de ayuda dentro de la app. El agente opera 24/7, resuelve problemas de nivel 1 de forma autónoma y escala inteligentemente todo lo demás.',
      },
      steps: [
        {
          title: { en: 'Issue classification on arrival', es: 'Clasificación del problema al llegar' },
          desc: {
            en: 'Every incoming ticket is immediately classified by type (billing, access, integration, bug, how-to) and severity (P1 production outage → P4 general question). This determines the routing path before a human even sees it.',
            es: 'Cada ticket entrante se clasifica inmediatamente por tipo (facturación, acceso, integración, bug, cómo se usa) y severidad (P1 interrupción de producción → P4 pregunta general). Esto determina el camino de routing antes de que un humano lo vea.',
          },
        },
        {
          title: { en: 'Tier-1 autonomous resolution', es: 'Resolución autónoma de nivel 1' },
          desc: {
            en: 'The agent handles tier-1 issues directly: it answers how-to questions from the product knowledge base, guides users through password reset flows, explains billing line items, and generates API documentation on demand. No human required.',
            es: 'El agente resuelve problemas de nivel 1 directamente: responde preguntas de uso desde la base de conocimiento del producto, guía a los usuarios en los flujos de restablecimiento de contraseñas, explica los ítems de facturación y genera documentación de API a pedido. Sin intervención humana.',
          },
        },
        {
          title: { en: 'Smart escalation with full context', es: 'Escalado inteligente con contexto completo' },
          desc: {
            en: 'When a ticket requires human intervention, the agent prepares a structured handoff: it summarizes the issue, provides the client\'s account history and recent activity, attaches relevant logs if available, and routes to the correct engineer based on specialty.',
            es: 'Cuando un ticket requiere intervención humana, el agente prepara un traspaso estructurado: resume el problema, proporciona el historial de cuenta del cliente y la actividad reciente, adjunta logs relevantes si están disponibles y deriva al ingeniero correcto según su especialidad.',
          },
        },
        {
          title: { en: 'P1 instant alert protocol', es: 'Protocolo de alerta instantánea P1' },
          desc: {
            en: 'Production outage signals (error rates, downtime reports from multiple clients) trigger an immediate PagerDuty alert to the on-call engineer, bypassing the queue entirely. Response time for critical issues dropped from hours to under 8 minutes.',
            es: 'Las señales de interrupción de producción (tasas de error, reportes de caída de múltiples clientes) disparan una alerta inmediata de PagerDuty al ingeniero de guardia, pasando la cola por completo. El tiempo de respuesta para problemas críticos bajó de horas a menos de 8 minutos.',
          },
        },
      ],
    },
    results: [
      { value: '65%', label: { en: 'reduction in ticket resolution time', es: 'reducción en tiempo de resolución de tickets' } },
      { value: '72%', label: { en: 'of tier-1 tickets resolved without human', es: 'de tickets nivel 1 resueltos sin humano' } },
      { value: '<8min', label: { en: 'P1 incident response time (was 4+ hours)', es: 'tiempo de respuesta P1 (antes 4+ horas)' } },
      { value: '-22%', label: { en: 'quarterly churn reduction', es: 'reducción de churn trimestral' } },
    ],
    quote: {
      text: {
        en: 'We were hemorrhaging clients in the US and Europe because our support was only available during Argentine business hours. Now the agent handles the overnight queue, and our team wakes up to only the tickets that genuinely need them. It changed everything.',
        es: 'Estábamos perdiendo clientes en EEUU y Europa porque nuestro soporte solo estaba disponible en horario hábil argentino. Ahora el agente maneja la cola nocturna, y nuestro equipo se despierta solo con los tickets que genuinamente los necesitan. Cambió todo.',
      },
      author: 'Rodrigo Méndez',
      role: { en: 'Head of Customer Success', es: 'Head of Customer Success' },
      company: 'FlowStack',
    },
    stack: ['Claude 4 Sonnet', 'Zendesk', 'PagerDuty', 'Slack', 'Internal knowledge base'],
    timeline: { en: 'Live in 3–4 weeks', es: 'Activo en 3–4 semanas' },
    workModel: { en: 'Ongoing Partner', es: 'Socio Continuo' },
  },
  {
    slug: 'whatsapp-onboarding',
    industry: { en: 'Financial Services', es: 'Servicios Financieros' },
    tag: { en: 'Service', es: 'Atención' },
    title: {
      en: 'Interactive Onboarding on WhatsApp',
      es: 'Onboarding Interactivo en WhatsApp',
    },
    tagline: {
      en: 'How a fintech company onboarded 4× more clients per month — with zero increase in operations headcount.',
      es: 'Cómo una fintech incorporó 4× más clientes por mes — sin aumentar un solo puesto en operaciones.',
    },
    challenge: {
      intro: {
        en: 'A fintech company offering SMB credit and financial products had a manual onboarding process: a new client signed up online, then waited for an operations agent to contact them, collect documents, explain the product terms, and complete identity verification. The average onboarding took 3–5 business days.',
        es: 'Una empresa fintech que ofrecía crédito y productos financieros para pymes tenía un proceso de onboarding manual: un nuevo cliente se registraba online, luego esperaba a que un agente de operaciones lo contactara, recopilara documentos, explicara los términos del producto y completara la verificación de identidad. El onboarding promedio tardaba 3–5 días hábiles.',
      },
      points: {
        en: [
          'A 3–5 day wait between signup and activation caused a 35% drop-off in the onboarding funnel — clients lost interest or signed with a competitor',
          'Operations agents were spending 40 minutes per client on document collection and explanation calls — limiting the team to 15–20 new clients per week',
          'Document rejection rates were high (28%) because clients submitted incorrect or incomplete files without guidance',
          'There was no way to onboard clients outside business hours — a significant barrier for SMB owners who work evenings and weekends',
        ],
        es: [
          'Una espera de 3–5 días entre el registro y la activación causaba una caída del 35% en el funnel de onboarding — los clientes perdían el interés o firmaban con un competidor',
          'Los agentes de operaciones pasaban 40 minutos por cliente en llamadas de recopilación de documentos y explicaciones — limitando al equipo a 15–20 nuevos clientes por semana',
          'Las tasas de rechazo de documentos eran altas (28%) porque los clientes enviaban archivos incorrectos o incompletos sin guía',
          'No había forma de incorporar clientes fuera del horario laboral — una barrera significativa para los dueños de pymes que trabajan por las tardes y los fines de semana',
        ],
      },
    },
    solution: {
      intro: {
        en: 'We built a fully automated onboarding agent on WhatsApp that guides new clients through the entire process — document collection, identity verification, product explanation, and account activation — conversationally, in their own time.',
        es: 'Construimos un agente de onboarding completamente automatizado en WhatsApp que guía a los nuevos clientes a través de todo el proceso — recopilación de documentos, verificación de identidad, explicación del producto y activación de cuenta — de forma conversacional, a su propio ritmo.',
      },
      steps: [
        {
          title: { en: 'Instant welcome and eligibility check', es: 'Bienvenida instantánea y verificación de elegibilidad' },
          desc: {
            en: 'As soon as a new client signs up, they receive a WhatsApp message within 60 seconds. The agent welcomes them, confirms eligibility (tax ID verification, basic business questions), and begins the onboarding flow — any time, any day.',
            es: 'En cuanto un nuevo cliente se registra, recibe un mensaje de WhatsApp en 60 segundos. El agente lo da la bienvenida, confirma la elegibilidad (verificación de CUIT/CNPJ, preguntas básicas del negocio) y comienza el flujo de onboarding — a cualquier hora, cualquier día.',
          },
        },
        {
          title: { en: 'Guided document collection with validation', es: 'Recopilación de documentos guiada con validación' },
          desc: {
            en: 'The agent requests each required document one at a time, explains exactly what format is needed, provides examples, and validates the submission in real time (using vision AI to check quality, completeness, and legibility). Documents that don\'t pass are rejected immediately with a clear explanation of what\'s wrong.',
            es: 'El agente solicita cada documento requerido de a uno, explica exactamente qué formato se necesita, proporciona ejemplos y valida el envío en tiempo real (usando IA de visión para verificar calidad, completitud y legibilidad). Los documentos que no pasan se rechazan inmediatamente con una explicación clara de qué está mal.',
          },
        },
        {
          title: { en: 'Product walkthrough and Q&A', es: 'Recorrido del producto y preguntas y respuestas' },
          desc: {
            en: 'Once documents are collected, the agent walks the client through the product terms, credit line limits, repayment schedule, and fees — in plain language. It answers any questions the client has conversationally, without legal jargon.',
            es: 'Una vez recopilados los documentos, el agente lleva al cliente a través de los términos del producto, límites de línea de crédito, cronograma de repago y comisiones — en lenguaje simple. Responde cualquier pregunta del cliente de forma conversacional, sin jerga legal.',
          },
        },
        {
          title: { en: 'Digital signing and activation', es: 'Firma digital y activación' },
          desc: {
            en: 'The agent sends the digital contract link, confirms signature, and triggers account activation in the backend system — notifying the client their credit line is active and explaining how to use it. The entire process takes 15–20 minutes.',
            es: 'El agente envía el enlace del contrato digital, confirma la firma y activa la cuenta en el sistema backend — notificando al cliente que su línea de crédito está activa y explicando cómo usarla. Todo el proceso lleva 15–20 minutos.',
          },
        },
      ],
    },
    results: [
      { value: '20min', label: { en: 'avg. onboarding time (was 3–5 days)', es: 'tiempo de onboarding promedio (antes 3–5 días)' } },
      { value: '4×', label: { en: 'more clients onboarded per month', es: 'más clientes incorporados por mes' } },
      { value: '-71%', label: { en: 'document rejection rate reduction', es: 'reducción en tasa de rechazo de documentos' } },
      { value: '35%', label: { en: 'funnel drop-off reduction', es: 'reducción de caída del funnel' } },
    ],
    quote: {
      text: {
        en: 'Our operations team used to dread Monday mornings — a backlog of 40+ clients waiting for onboarding calls. Now those clients onboard themselves over the weekend via WhatsApp. Our team spends their time on exceptions and complex cases, not paperwork.',
        es: 'Nuestro equipo de operaciones temía los lunes por la mañana — una cola de 40+ clientes esperando llamadas de onboarding. Ahora esos clientes se incorporan solos durante el fin de semana por WhatsApp. Nuestro equipo dedica su tiempo a excepciones y casos complejos, no a papeleo.',
      },
      author: 'Camila Fernández',
      role: { en: 'VP of Operations', es: 'VP de Operaciones' },
      company: 'Crédito Ágil',
    },
    stack: ['GPT-5', 'GPT-5 Vision', 'WhatsApp', 'DocuSign', 'any CRM'],
    timeline: { en: 'Live in 3–4 weeks', es: 'Activo en 3–4 semanas' },
    workModel: { en: 'Ongoing Partner', es: 'Socio Continuo' },
  },
];
