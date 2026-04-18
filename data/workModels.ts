export interface WorkModel {
  label: string;
  title: string;
  description: string;
  benefits: string[];
}

export const workModels: WorkModel[] = [
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
  },
];
