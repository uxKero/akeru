export interface Testimonial {
  text: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Tuvimos resultados en 48 horas. El agente de ventas captura lo que antes perdíamos.",
    authorName: "Martina Ross",
    authorTitle: "Head of Growth",
    companyName: "Acme Corp",
  }
];

export const stats = [
  {
    number: "+40%",
    description: "aumento en calificación de leads",
  },
  {
    number: "3+",
    description: "meses de retención promedio",
  }
];
