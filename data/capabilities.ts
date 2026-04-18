export interface CapabilityColumn {
  title: string;
  skills: string[];
}

export const capabilities: CapabilityColumn[] = [
  {
    title: 'Diseño',
    skills: [
      'Personalidad del agente',
      'Flujo de conversación',
      'Tono y límites',
      'Manejo de errores',
      'Escalado a humano',
      'Contexto de negocio',
    ],
  },
  {
    title: 'Configuración',
    skills: [
      'Conexión WhatsApp',
      'API de modelos',
      'Base de conocimiento',
      'Memoria del agente',
      'Webhooks',
      'Panel de control',
      'Testing',
    ],
  },
  {
    title: 'Integración',
    skills: [
      'WhatsApp Business',
      'Slack',
      'Email',
      'Notion / Docs',
      'CRMs',
      'Google Workspace',
      'Sistemas propios',
    ],
  },
];
