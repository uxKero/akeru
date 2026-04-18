export interface Service {
  title: string;
  description: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    title: 'Ventas',
    description: 'Califica prospectos, responde consultas y cierra conversaciones en WhatsApp. Tu equipo de ventas nunca más pierde un lead.',
    imageAlt: 'Agente de ventas en WhatsApp',
  },
  {
    title: 'Atención',
    description: 'Responde al instante, escala lo importante al equipo humano y mantiene el tono de tu marca en cada mensaje.',
    imageAlt: 'Atención al cliente automatizada',
  },
  {
    title: 'Soporte',
    description: 'Diagnóstica, guía paso a paso y registra tickets. Tu equipo técnico recibe solo lo que importa.',
    imageAlt: 'Soporte técnico y resolución de tickets',
  },
];
