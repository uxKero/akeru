export interface FAQEntry {
  question: string;
  answer: string;
}

export const faq: FAQEntry[] = [
  {
    question: '¿Qué diferencia hay entre Setup Puntual y Socio Continuo?',
    answer: 'Setup Puntual es un proyecto de alcance cerrado, precio fijo y entrega definida. Socio Continuo es una colaboración mensual donde el agente se ajusta y evoluciona con tu negocio.',
  },
  {
    question: '¿Necesito saber programación para usar los agentes?',
    answer: 'No. Nosotros nos encargamos de todo el aspecto técnico. Vos solo necesitás contarnos cómo funciona tu negocio.',
  },
  {
    question: '¿En cuánto tiempo está activo el agente?',
    answer: 'Un agente de Setup Puntual estándar tarda entre 3 y 7 días hábiles desde el diagnóstico hasta el lanzamiento.',
  },
  {
    question: '¿Funciona en WhatsApp Business normal o solo en API?',
    answer: 'Para agentes con automatización completa se requiere acceso a la WhatsApp Business API. Te ayudamos a gestionarlo si no lo tenés.',
  },
  {
    question: '¿Cómo manejan la privacidad de las conversaciones?',
    answer: 'Las conversaciones no se almacenan en servidores externos innecesarios. El agente opera con acceso mínimo necesario y podemos firmar NDA si el proyecto lo requiere.',
  },
  {
    question: '¿Puedo cambiar el comportamiento del agente después de instalado?',
    answer: 'Sí. El comportamiento, tono y límites del agente son ajustables. En el plan Socio Continuo los cambios están incluidos mensualmente.',
  },
  {
    question: '¿Qué modelos de IA usan?',
    answer: 'Usamos modelos de OpenAI, Anthropic y otros según el caso de uso. La elección del modelo depende del volumen, complejidad y presupuesto de cada proyecto.',
  },
];
