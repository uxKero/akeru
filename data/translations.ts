export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      cases: "Cases",
      faq: "FAQ",
      cta: "Let's Collaborate",
      langSwitch: "ES"
    },
    hero: {
      label: "AI Agents for your company",
      rotating: [
        "There are queries your business answers a thousand times a day.",
        "There are leads lost because nobody answers in time.",
        "There are proposals that were never followed up.",
        "There are clients waiting for a scheduling no one coordinated.",
        "There are collections delayed because nobody sends reminders.",
        "There are invoices someone has to process by hand.",
        "There are reports built identically every Monday.",
        "There are due dates that always pop up too late.",
        "There is data in one system that should be in another.",
        "There are forms someone fills out one by one.",
        "There is content to publish, but nobody has time.",
        "There are competitors nobody is monitoring.",
        "There is a blog post that could be ten different formats.",
        "There are resumes nobody has read yet.",
        "There are new hires who don't know who to ask.",
        "There are HR questions that are always the exact same.",
        "There is data nobody has time to analyze.",
        "There are reports that could write themselves.",
        "There is market intelligence that never arrives on time.",
        "There are extensive documents nobody ever finishes reading.",
        "There is code your team writes over and over again.",
        "There are tests never written because there is no time.",
        "There are PRs waiting for a review for three days.",
        "There is documentation that always falls out of date.",
        "There are tickets that could magically turn themselves into code.",
        "There are two systems that should talk to each other and don't.",
        "There are CRM tasks that are always left for later.",
        "There are alerts that should trigger automatically and don't.",
        "There are manual workflows repeating in the exact same way.",
        "There are actions waiting for someone to trigger them."
      ],
      fixed: "We solve them.",
      sub: "We install AI agents in your business. They adapt to what you need, work where you already work, and do the job a person does today — or the job nobody is doing.",
      btnPrimary: "Start your project →",
      btnSecondary: "Which agent do I need?"
    },
    subHeadline: {
      text: "We don't install chatbots. We design agents that reason, prioritize, and act — based on the exact context of your business."
    },
    diagram: {
      labelLeft: "Capabilities",
      labelRight: "Service Areas",
      top: ["Discovery & Architecture", "Development & Tuning", "Deployment & Monitoring"],
      bottom: ["Web / Chat Interfaces", "Internal Systems", "3rd-Party APIs"]
    },
    capabilitiesGrid: {
      label: "Capabilities",
      columns: [
        {
          title: "Discovery & Architecture",
          skills: ["Workflow mapping", "AI Model selection", "Security hardening", "Data compliance", "Cost estimation", "Cloud strategy"]
        },
        {
          title: "Development & Tuning",
          skills: ["Prompt engineering", "API connections", "Agent memory", "Persona & tone", "RAG (Knowledge)", "Hallucination prevention"]
        },
        {
          title: "Deployment & Monitoring",
          skills: ["CI/CD pipelines", "Automated E2E testing", "Analytics dashboard", "Continuous learning", "Quota limits", "Human handoff"]
        }
      ]
    },
    serviceAreas: [
      {
        title: 'Sales & Customer Service',
        description: 'Agents that interact with customers across external channels. Lead qualification, quoting, post-sale surveys, collections, and tier 1 support.',
      },
      {
        title: 'Internal Operations',
        description: 'Automate processes within your company. Email triage, invoice processing, stock control, logistics coordination, and operational reporting.',
      },
      {
        title: 'Marketing & Content',
        description: 'Agents that produce, transform, and distribute content. Social media drafting, competitor research, campaign briefing, and sentiment analysis.',
      },
      {
        title: 'Human Resources',
        description: 'Assist in people processes. Initial resume screening, interview coordination, new employee onboarding, and internal climate surveys.',
      },
      {
        title: 'Data & Research',
        description: 'Agents that search, analyze, and synthesize information. Data analysis from CSVs/DBs, industry news monitoring, competitive benchmarking, and financial reporting.',
      },
      {
        title: 'Engineering & Product',
        description: 'Assist technical teams end-to-end. Frontend generation, backend logic, QA test writing, CI/CD pipeline building, and full-stack technical debt management.',
      },
      {
        title: 'Integrations & Automations',
        description: 'Connect systems and execute cross-platform actions. Bridge native gaps (CRM ↔ ERP), listen to webhooks, enrich leads, and schedule automated reports.',
      }
    ],
    workModels: {
      title: "Two ways to work",
      models: [
        {
          label: 'One-off Setup',
          title: 'Fixed project for a specific goal',
          description: 'Ideal for companies wanting to implement an agent in a set timeframe with closed scope.',
          benefits: ['One-time setup with fixed price. No surprises.'],
        },
        {
          label: 'Ongoing Partner',
          title: 'Continuous collaboration for evolving needs',
          description: 'Ideal for companies with multiple agents or frequent changes.',
          benefits: ['Fixed monthly price. Continuous adjustment included.'],
        }
      ]
    },
    testimonials: {
      label: "What our clients say",
      reviews: [
        {
          quote1: "We had results in 48 hours.",
          quote2: " The sales agent captures what we previously lost.",
          authorName: "Martina Ross",
          authorTitle: "Head of Growth",
          companyName: "Acme Corp"
        },
        {
          quote1: "Customer service is now instant.",
          quote2: " We drastically reduced our response times.",
          authorName: "Lucas Klein",
          authorTitle: "Operations Manager",
          companyName: "NexGen Logistics"
        },
        {
          quote1: "Our tech support is hands-free.",
          quote2: " The agent resolves 60% of tier 1 tickets automatically.",
          authorName: "Sarah Connor",
          authorTitle: "CTO",
          companyName: "CyberDyne Systems"
        }
      ],
      stats: [
        { number: "+40%", description: "increase in lead qualification" },
        { number: "3+", description: "months average retention" }
      ]
    },
    clients: {
      title: "We work with companies that want real results.",
      cta: "View all cases",
      list: [
        { name: 'TechFlow' }, { name: 'NXT Reality' }, { name: 'Horizon Bio' }, { name: 'Global Finance' },
        { name: 'Lumina Design' }, { name: 'Zenith Logistics' }, { name: 'AeroSpace Inc' }, { name: 'Quantum Core' }
      ]
    },
    recentCases: {
      title: "Recent projects",
      cases: [
        { tag: 'Sales', title: 'Real estate pre-qualification automation' },
        { tag: 'Support', title: '24/7 technical triage agent' },
        { tag: 'Service', title: 'Interactive onboarding on WhatsApp' },
      ]
    },
    faq: {
      label: "FAQ",
      title: "Your questions, answered",
      list: [
        {
          question: 'Do I need to know how to code to use the agents?',
          answer: 'No. We handle 100% of the technical architecture. We integrate securely into your existing stack, you just give us the business rules.'
        },
        {
          question: 'What systems and platforms can you integrate with?',
          answer: 'Basically anything with an API. We build native connections for WhatsApp Business, Slack, GitHub, Jira, AWS, major CRMs (HubSpot, Salesforce), ERPs, and custom internal systems.'
        },
        {
          question: 'How do you handle corporate data security and privacy?',
          answer: 'Your data is strictly isolated. We do not use your business data to train public models. The agents operate with minimum required access privileges, and we are ready to sign an NDA before any technical discovery.'
        },
        {
          question: 'Which AI models power these agents?',
          answer: 'We are model-agnostic. We deploy OpenAI, Anthropic (Claude), or Google (Gemini) depending on the cognitive workload, context window needs, and cost efficiency for your specific usecase.'
        },
        {
          question: 'How long does it take to deploy an agent?',
          answer: 'It depends on the complexity. Simple webhook listeners and triage agents can be live in 3-7 days. Deep autonomous software-engineering or data-analysis agents usually require a 2-4 week deployment architecture.'
        },
        {
          question: 'What is the difference between One-off Setup and Ongoing Partner?',
          answer: 'One-off Setup is a closed-scope project, fixed price, and defined delivery. Ongoing Partner is a monthly collaboration where the agent adapts to API changes and evolves with your business logic.'
        },
        {
          question: 'What happens if an external API changes or breaks?',
          answer: 'If you are under the Ongoing Partner plan, we proactively monitor API health and rewrite the integration endpoints before your agent experiences downtime.'
        }
      ]
    },
    whyAkeru: {
      title: "What else do we bring to the relationship?",
      cards: [
        {
          title: "Real track record",
          desc: "Proven experience in native integrations that respect the company's current infrastructure."
        },
        {
          title: "Single point of contact",
          desc: "Maximum technical simplification. We centralize the operation and report key insights."
        },
        {
          title: "We don't just configure. We design the complete agent experience.",
          desc: ""
        }
      ]
    },
    booking: {
      title: "Tell us about your case",
      subtitle: "We will design an agent perfectly suited to your workflow.",
      fields: {
        name: "Full Name",
        email: "Work Email",
        whatsapp: "WhatsApp Number",
        company: "Company Name",
        agentType: "What type of agent do you need?",
        otherDesc: "Please describe your ideal agent",
      },
      agentTypes: {
        sales: "Sales & Lead Qualification",
        support: "Customer Service & FAQ",
        tech: "Technical Support & Triage",
        internal: "Internal Knowledge & Docs",
        crm: "CRM Automation",
        operations: "Operations & Logistics",
        other: "Other (Custom Agent)"
      },
      submit: "Request Deep Dive",
      otherPlaceholder: "We need an agent that connects to our ERP and...",
      successTitle: "Request Received",
      successText: "We'll be in touch within 24 hours to schedule our deep dive call.",
      backHome: "Back to Home"
    },
    closingCta: {
      text1: "Don't know where to start?",
      text2: "We'll find the solution together.",
      btn: "Book a free consultation"
    },
    footer: {
      tagline: "AI Agents for business · LATAM"
    }
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      cases: "Casos",
      faq: "FAQ",
      cta: "Colaboremos",
      langSwitch: "EN"
    },
    hero: {
      label: "Agentes de IA para tu empresa",
      rotating: [
        "Hay consultas que tu negocio responde mil veces al día.",
        "Hay leads que se pierden porque nadie responde a tiempo.",
        "Hay propuestas enviadas que nunca tuvieron seguimiento.",
        "Hay clientes que esperan un turno que nadie coordinó.",
        "Hay cobranzas que se atrasan porque nadie las recuerda.",
        "Hay facturas que alguien tiene que procesar a mano.",
        "Hay reportes que se arman igual todos los lunes.",
        "Hay vencimientos que siempre aparecen tarde.",
        "Hay datos en un sistema que deberían estar en otro.",
        "Hay formularios que alguien completa uno por uno.",
        "Hay contenido que se podría publicar y nadie tiene tiempo.",
        "Hay competidores que nadie está monitoreando.",
        "Hay un blog que podría ser diez formatos distintos.",
        "Hay CVs que nadie leyó todavía.",
        "Hay empleados nuevos que no saben a quién preguntar.",
        "Hay preguntas de RRHH que siempre son las mismas.",
        "Hay datos que nadie tiene tiempo de analizar.",
        "Hay reportes que podrían escribirse solos.",
        "Hay información de mercado que nunca llega a tiempo.",
        "Hay documentos extensos que nadie termina de leer.",
        "Hay código que tu equipo escribe una y otra vez.",
        "Hay tests que nunca se escriben porque no hay tiempo.",
        "Hay PRs que esperan review hace tres días.",
        "Hay documentación que siempre queda desactualizada.",
        "Hay tickets que podrían convertirse solos en código.",
        "Hay dos sistemas que deberían hablar entre sí y no lo hacen.",
        "Hay tareas en tu CRM que siempre quedan para después.",
        "Hay alertas que deberían llegar solas y no llegan.",
        "Hay flujos manuales que se repiten exactamente igual.",
        "Hay acciones que esperan que alguien las dispare."
      ],
      fixed: "Las resolvemos nosotros.",
      sub: "Instalamos agentes de IA en tu negocio. Se adaptan a lo que necesitas, trabajan donde ya trabajas, y hacen el trabajo que hoy hace una persona — o que nadie está haciendo.",
      btnPrimary: "Inicia tu proyecto →",
      btnSecondary: "¿Qué agente necesito?"
    },
    subHeadline: {
      text: "No instalamos chatbots. Diseñamos agentes que razonan, priorizan y actúan — según el contexto exacto de tu negocio."
    },
    diagram: {
      labelLeft: "Capacidades",
      labelRight: "Áreas de servicio",
      top: ["Descubrimiento y Arquitectura", "Desarrollo y Ajustes", "Despliegue y Monitoreo"],
      bottom: ["Interfaces Web / Chat", "Sistemas Internos", "Conexión APIs de 3ros"]
    },
    capabilitiesGrid: {
      label: "Capacidades",
      columns: [
        {
          title: "Descubrimiento y Arquitectura",
          skills: ["Mapeo de procesos", "Selección de Modelos AI", "Control de seguridad", "Cumplimiento (Compliance)", "Estimación de costos", "Estrategia cloud"]
        },
        {
          title: "Desarrollo y Ajustes",
          skills: ["Ingeniería de Prompts", "Conexión con APIs", "Memoria de agentes", "Personalidad y tono", "RAG (Bases de datos)", "Prevención de alucinaciones"]
        },
        {
          title: "Despliegue y Monitoreo",
          skills: ["Pipelines CI/CD", "Testing E2E automático", "Dashboard de analíticas", "Entrenamiento continuo", "Límites de cuotas", "Escalado a humanos"]
        }
      ]
    },
    serviceAreas: [
      {
        title: 'Atención y ventas',
        description: 'Agentes que interactúan con clientes en canales externos. Calificación de leads, cotizaciones, cobranzas, reservas y soporte técnico de primer nivel.',
      },
      {
        title: 'Operaciones internas',
        description: 'Agentes que automatizan procesos dentro de la empresa. Clasificación de emails, facturas, seguimiento de proveedores, reportes y control de logística.',
      },
      {
        title: 'Marketing y contenido',
        description: 'Agentes que producen, transforman y distribuyen contenido. Redes sociales, análisis de sentimiento, investigación de competidores y newsletters.',
      },
      {
        title: 'Recursos humanos',
        description: 'Agentes que asisten en procesos de personas. Screening de CVs, entrevistas, onboarding de empleados nuevos y encuestas de clima.',
      },
      {
        title: 'Datos e investigación',
        description: 'Agentes que buscan, analizan y sintetizan información. Análisis de bases de datos, monitoreo diario de noticias y benchmarking competitivo.',
      },
      {
        title: 'Programación y producto',
        description: 'Agentes que asisten a equipos técnicos. Generación de interfaces, endpoints, automatización de tests QA, pipelines DevOps y codebase maintenance.',
      },
      {
        title: 'Integraciones y automatizaciones',
        description: 'Agentes que conectan sistemas y ejecutan acciones entre plataformas. Sincronización ERP/CRM, alertas inteligentes y acciones encadenadas por webhooks.',
      }
    ],
    workModels: {
      title: "Dos formas de trabajar",
      models: [
        {
          label: 'Setup Puntual',
          title: 'Proyecto fijo para un objetivo específico',
          description: 'Ideal para empresas que quieren implementar un agente en tiempo definido con alcance cerrado.',
          benefits: ['Setup único con precio fijo. Sin sorpresas.'],
        },
        {
          label: 'Socio Continuo',
          title: 'Colaboración continua para necesidades que evolucionan',
          description: 'Ideal para empresas con múltiples agentes o cambios frecuentes.',
          benefits: ['Precio mensual fijo. Ajuste continuo incluido.'],
        }
      ]
    },
    testimonials: {
      label: "Lo que dicen nuestros clientes",
      reviews: [
        {
          quote1: "Tuvimos resultados en 48 horas.",
          quote2: " El agente de ventas captura lo que antes perdíamos.",
          authorName: "Martina Ross",
          authorTitle: "Head of Growth",
          companyName: "Acme Corp"
        },
        {
          quote1: "La atención al cliente ahora es instantánea.",
          quote2: " Redujimos drásticamente nuestros tiempos de respuesta.",
          authorName: "Lucas Klein",
          authorTitle: "Gerente de Operaciones",
          companyName: "NexGen Logistics"
        },
        {
          quote1: "Nuestro soporte técnico es automático.",
          quote2: " El agente resuelve el 60% de los tickets nivel 1 solo.",
          authorName: "Sarah Connor",
          authorTitle: "CTO",
          companyName: "CyberDyne Systems"
        }
      ],
      stats: [
        { number: "+40%", description: "aumento en calificación de leads" },
        { number: "3+", description: "meses de retención promedio" }
      ]
    },
    clients: {
      title: "Trabajamos con empresas que quieren resultados reales.",
      cta: "Ver todos los casos",
      list: [
        { name: 'TechFlow' }, { name: 'NXT Reality' }, { name: 'Horizon Bio' }, { name: 'Global Finance' },
        { name: 'Lumina Design' }, { name: 'Zenith Logistics' }, { name: 'AeroSpace Inc' }, { name: 'Quantum Core' }
      ]
    },
    recentCases: {
      title: "Últimos proyectos",
      cases: [
        { tag: 'Ventas', title: 'Automatización de pre-calificación inmobiliaria' },
        { tag: 'Soporte', title: 'Agente de triage técnico 24/7' },
        { tag: 'Atención', title: 'Onboarding interactivo en WhatsApp' },
      ]
    },
    faq: {
      label: "FAQ",
      title: "Tus preguntas, respondidas",
      list: [
        {
          question: '¿Necesito saber programación para usar los agentes?',
          answer: 'No. Nosotros nos encargamos del 100% de la arquitectura técnica. Nos integramos de forma segura a tu software actual, tú solo debes contarnos las reglas del negocio.'
        },
        {
          question: '¿Con qué sistemas y plataformas se pueden integrar?',
          answer: 'Básicamente con cualquier cosa que tenga una API. Construimos conexiones nativas para WhatsApp Business, Slack, GitHub, Jira, AWS, los CRMs más grandes (HubSpot, Salesforce), ERPs y sistemas internos a medida.'
        },
        {
          question: '¿Cómo manejan la seguridad y privacidad de los datos corporativos?',
          answer: 'Tus datos están estrictamente aislados. No usamos la información de tu negocio para entrenar modelos públicos. Los agentes operan con el mínimo nivel de acceso requerido, y firmamos NDAs antes del descubrimiento técnico.'
        },
        {
          question: '¿Qué modelos de IA le dan vida a estos agentes?',
          answer: 'Somos agnósticos en cuanto a modelos. Desplegamos OpenAI, Anthropic (Claude) o Google (Gemini) priorizando el peso cognitivo, la ventana de contexto necesaria y la eficiencia de costos para tu caso de uso específico.'
        },
        {
          question: '¿En cuánto tiempo se despliega un agente?',
          answer: 'Depende de la complejidad. Agentes simples de triage o escuchas de webhooks pueden estar activos en 3-7 días. Agentes profundos y autónomos para análisis de datos masivos o ingeniería de software suelen requerir 2-4 semanas de arquitectura.'
        },
        {
          question: '¿Qué diferencia hay entre Setup Puntual y Socio Continuo?',
          answer: 'Setup Puntual es un proyecto de alcance cerrado, precio fijo y entrega definida. Socio Continuo es una colaboración mensual donde el agente se adapta a cambios externos y evoluciona junto con la lógica de tu negocio.'
        },
        {
          question: '¿Qué pasa si una API externa cambia o se rompe?',
          answer: 'Bajo el plan Socio Continuo, monitoreamos la salud de todas las APIs proactivamente y reescribimos los endpoints de la integración antes de que tu agente sufra caídas o tiempos muertos.'
        }
      ]
    },
    whyAkeru: {
      title: "¿Qué más traemos a la relación?",
      cards: [
        {
          title: "Track record real",
          desc: "Experiencia comprobada en integraciones nativas que respetan la infraestructura actual de la empresa."
        },
        {
          title: "Un solo interlocutor",
          desc: "Simplificación técnica máxima. Centralizamos la operación y reportamos los insights clave."
        },
        {
          title: "No solo configuramos. Diseñamos la experiencia completa del agente.",
          desc: ""
        }
      ]
    },
    booking: {
      title: "Cuéntanos sobre tu caso",
      subtitle: "Diseñaremos un agente perfectamente adaptado a tu flujo de trabajo.",
      fields: {
        name: "Nombre Completo",
        email: "Correo Electrónico (Trabajo)",
        whatsapp: "Número de WhatsApp",
        company: "Nombre de la Empresa",
        agentType: "¿Qué tipo de agente necesitas?",
        otherDesc: "Por favor describe tu agente ideal",
      },
      agentTypes: {
        sales: "Ventas y Calificación de Leads",
        support: "Atención al Cliente y FAQ",
        tech: "Soporte Técnico y Triage",
        internal: "Conocimiento Interno y Documentos",
        crm: "Automatización de CRM",
        operations: "Operaciones y Logística",
        other: "Otro (Agente a la medida)"
      },
      submit: "Agendar Deep Dive",
      otherPlaceholder: "Necesitamos un agente que se conecte a nuestro ERP y...",
      successTitle: "Solicitud Recibida",
      successText: "Nos pondremos en contacto dentro de las próximas 24 horas para agendar nuestra llamada.",
      backHome: "Volver al inicio"
    },
    closingCta: {
      text1: "¿No sabes por dónde empezar?",
      text2: "Encontramos la solución juntos.",
      btn: "Agendar consulta gratuita"
    },
    footer: {
      tagline: "Agentes de IA para empresas · LATAM"
    }
  }
};
