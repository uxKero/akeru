export const agentCategories = {
  es: [
    {
      groupLabel: "Atención y ventas",
      options: [
        { id: "sales_cs_general", label: "Atención al cliente general" },
        { id: "sales_leads", label: "Ventas y calificación de leads" },
        { id: "sales_quotes", label: "Cotizaciones automáticas" },
        { id: "sales_followup", label: "Seguimiento de propuestas" },
        { id: "sales_collections", label: "Cobranzas y recordatorios de pago" },
        { id: "sales_booking", label: "Reservas y turnos" },
        { id: "sales_onboarding", label: "Onboarding de nuevos clientes" },
        { id: "sales_surveys", label: "Encuestas de satisfacción post-venta" },
        { id: "sales_support_l1", label: "Soporte técnico nivel 1" },
        { id: "sales_reviews", label: "Respuesta a reseñas y comentarios" }
      ]
    },
    {
      groupLabel: "Operaciones internas",
      options: [
        { id: "ops_email", label: "Clasificación y respuesta de emails" },
        { id: "ops_invoices", label: "Procesamiento de facturas y documentos" },
        { id: "ops_suppliers", label: "Seguimiento de proveedores" },
        { id: "ops_stock", label: "Control de stock con alertas" },
        { id: "ops_logistics", label: "Coordinación logística y envíos" },
        { id: "ops_reports", label: "Generación de reportes operativos" },
        { id: "ops_reminders", label: "Recordatorios de vencimientos y renovaciones" },
        { id: "ops_reconciliation", label: "Conciliación de pagos" },
        { id: "ops_anomalies", label: "Detección de anomalías en gastos" },
        { id: "ops_forms", label: "Completado de formularios en sistemas internos" }
      ]
    },
    {
      groupLabel: "Marketing y contenido",
      options: [
        { id: "mkt_social", label: "Generación de borradores para redes sociales" },
        { id: "mkt_repurpose", label: "Transformación de un formato a múltiples (blog → tweet, etc.)" },
        { id: "mkt_competitors", label: "Investigación y monitoreo de competidores" },
        { id: "mkt_sentiment", label: "Análisis de comentarios y menciones de marca" },
        { id: "mkt_brief", label: "Briefing de campaña desde objetivos de negocio" },
        { id: "mkt_newsletter", label: "Generación de newsletters personalizados por segmento" },
        { id: "mkt_trends", label: "Resumen de tendencias del sector" },
        { id: "mkt_products", label: "Redacción de descripciones de producto" }
      ]
    },
    {
      groupLabel: "Recursos humanos",
      options: [
        { id: "hr_screening", label: "Screening inicial de CVs" },
        { id: "hr_interviews", label: "Coordinación de entrevistas" },
        { id: "hr_onboarding", label: "Onboarding de empleados nuevos" },
        { id: "hr_faq", label: "Respuesta a preguntas frecuentes de RRHH" },
        { id: "hr_climate", label: "Encuestas de clima interno" },
        { id: "hr_reports", label: "Generación de reportes de equipo" },
        { id: "hr_performance", label: "Seguimiento de objetivos y performance" }
      ]
    },
    {
      groupLabel: "Datos e investigación",
      options: [
        { id: "dat_analysis", label: "Análisis de archivos CSV, Excel y bases de datos" },
        { id: "dat_news", label: "Monitoreo de noticias del sector con resumen diario" },
        { id: "dat_market", label: "Investigación de mercado para nuevos productos" },
        { id: "dat_benchmarking", label: "Benchmarking competitivo automatizado" },
        { id: "dat_scraping", label: "Scraping y resumen de fuentes específicas" },
        { id: "dat_financial", label: "Generación de reportes financieros desde datos crudos" },
        { id: "dat_patterns", label: "Detección de patrones en datos de negocio" },
        { id: "dat_summary", label: "Resumen ejecutivo de documentos extensos" }
      ]
    },
    {
      groupLabel: "Programación y producto",
      options: [
        { id: "dev_fe_components", label: "[Front] Generación de componentes desde descripción/diseño" },
        { id: "dev_fe_figma", label: "[Front] Conversión de Figma / screenshots a código" },
        { id: "dev_fe_a11y", label: "[Front] Revisión de accesibilidad (WCAG)" },
        { id: "dev_fe_perf", label: "[Front] Optimización de performance y bundle" },
        { id: "dev_fe_migration", label: "[Front] Migración entre frameworks" },
        { id: "dev_be_endpoints", label: "[Back] Generación de endpoints REST / GraphQL desde specs" },
        { id: "dev_be_security", label: "[Back] Revisión de seguridad y vulnerabilidades" },
        { id: "dev_be_db", label: "[Back] Escritura de migraciones de base de datos" },
        { id: "dev_be_queries", label: "[Back] Optimización de queries SQL / ORM" },
        { id: "dev_be_docs", label: "[Back] Documentación automática de APIs (OpenAPI/Swagger)" },
        { id: "dev_be_legacy", label: "[Back] Refactoring de código legacy" },
        { id: "dev_be_logic", label: "[Back] Conversión de lógica de negocio a código" },
        { id: "dev_qa_unit", label: "[QA] Tests unitarios desde un módulo existente" },
        { id: "dev_qa_e2e", label: "[QA] Tests e2e (Playwright/Cypress) desde flujos descritos" },
        { id: "dev_qa_cases", label: "[QA] Casos de prueba desde requisitos funcionales" },
        { id: "dev_qa_bugs", label: "[QA] Reporte de bugs estructurado desde descripción libre" },
        { id: "dev_qa_coverage", label: "[QA] Análisis de cobertura con sugerencias" },
        { id: "dev_op_cicd", label: "[DevOps] Generación de pipelines CI/CD" },
        { id: "dev_op_docker", label: "[DevOps] Revisión de Dockerfiles y configuraciones" },
        { id: "dev_op_logs", label: "[DevOps] Monitoreo de logs con alertas inteligentes" },
        { id: "dev_op_docs", label: "[DevOps] Documentación de infraestructura" },
        { id: "dev_op_cost", label: "[DevOps] Sugerencias de optimización de costos en cloud" },
        { id: "dev_fs_ticket", label: "[Full Stack] Toma un ticket y genera código completo" },
        { id: "dev_fs_review", label: "[Full Stack] Code review en PRs con comentarios estructurados" },
        { id: "dev_fs_issues", label: "[Full Stack] Conversión de issues en código base" },
        { id: "dev_fs_onboarding", label: "[Full Stack] Onboarding técnico para nuevos devs" },
        { id: "dev_fs_debt", label: "[Full Stack] Detección de deuda técnica con priorización" },
        { id: "dev_fs_readme", label: "[Full Stack] Mantenimiento automático de documentación" }
      ]
    },
    {
      groupLabel: "Integraciones y automatizaciones",
      options: [
        { id: "int_glue", label: "Conexión entre sistemas sin integración nativa" },
        { id: "int_sync", label: "Sincronización de datos entre plataformas (CRM ↔ ERP, etc.)" },
        { id: "int_webhooks", label: "Escucha de webhooks con ejecución de acciones en cascada" },
        { id: "int_crm_update", label: "Actualización automática del CRM post-llamada o reunión" },
        { id: "int_lead_enrich", label: "Enriquecimiento de leads desde fuentes públicas" },
        { id: "int_alerts", label: "Alertas inteligentes desde métricas de negocio" },
        { id: "int_auto_reports", label: "Reportes automáticos enviados en horario fijo" },
        { id: "int_contracts", label: "Generación de contratos y documentos estándar" },
        { id: "int_external_api", label: "Acciones en APIs externas disparadas por eventos internos" },
        { id: "int_workflows", label: "Automatización de flujos entre herramientas (Make, Zapier)" }
      ]
    }
  ],
  en: [
    {
      groupLabel: "Customer Service & Sales",
      options: [
        { id: "sales_cs_general", label: "General Customer Service" },
        { id: "sales_leads", label: "Sales and Lead Qualification" },
        { id: "sales_quotes", label: "Automated Quoting" },
        { id: "sales_followup", label: "Proposal Follow-up" },
        { id: "sales_collections", label: "Collections and Payment Reminders" },
        { id: "sales_booking", label: "Reservations and Scheduling" },
        { id: "sales_onboarding", label: "New Customer Onboarding" },
        { id: "sales_surveys", label: "Post-sale Satisfaction Surveys" },
        { id: "sales_support_l1", label: "Tier 1 Technical Support" },
        { id: "sales_reviews", label: "Review and Comment Response" }
      ]
    },
    {
      groupLabel: "Internal Operations",
      options: [
        { id: "ops_email", label: "Email Triage and Response" },
        { id: "ops_invoices", label: "Invoice and Document Processing" },
        { id: "ops_suppliers", label: "Supplier Follow-up" },
        { id: "ops_stock", label: "Inventory Control with Alerts" },
        { id: "ops_logistics", label: "Logistics and Shipping Coordination" },
        { id: "ops_reports", label: "Operational Report Generation" },
        { id: "ops_reminders", label: "Due Date and Renewal Reminders" },
        { id: "ops_reconciliation", label: "Payment Reconciliation" },
        { id: "ops_anomalies", label: "Expense Anomaly Detection" },
        { id: "ops_forms", label: "Internal System Form Completion" }
      ]
    },
    {
      groupLabel: "Marketing & Content",
      options: [
        { id: "mkt_social", label: "Social Media Draft Generation" },
        { id: "mkt_repurpose", label: "Format Repurposing (blog → tweet, etc.)" },
        { id: "mkt_competitors", label: "Competitor Research and Monitoring" },
        { id: "mkt_sentiment", label: "Brand Mention and Sentiment Analysis" },
        { id: "mkt_brief", label: "Campaign Briefing from Business Goals" },
        { id: "mkt_newsletter", label: "Segment-Personalized Newsletters" },
        { id: "mkt_trends", label: "Industry Trends Summary" },
        { id: "mkt_products", label: "Product Description Writing" }
      ]
    },
    {
      groupLabel: "Human Resources",
      options: [
        { id: "hr_screening", label: "Initial Resume Screening" },
        { id: "hr_interviews", label: "Interview Coordination" },
        { id: "hr_onboarding", label: "New Employee Onboarding" },
        { id: "hr_faq", label: "HR FAQ Response" },
        { id: "hr_climate", label: "Internal Climate Surveys" },
        { id: "hr_reports", label: "Team Report Generation" },
        { id: "hr_performance", label: "Goal and Performance Tracking" }
      ]
    },
    {
      groupLabel: "Data & Research",
      options: [
        { id: "dat_analysis", label: "NL Data Analysis (CSV, Excel, DBs)" },
        { id: "dat_news", label: "Industry News Monitoring & Daily Summary" },
        { id: "dat_market", label: "Market Research for New Products" },
        { id: "dat_benchmarking", label: "Automated Competitive Benchmarking" },
        { id: "dat_scraping", label: "Scraping and Specific Source Summary" },
        { id: "dat_financial", label: "Financial Report Generation from Raw Data" },
        { id: "dat_patterns", label: "Business Data Pattern Detection" },
        { id: "dat_summary", label: "Executive Summary of Extensive Documents" }
      ]
    },
    {
      groupLabel: "Engineering & Product",
      options: [
        { id: "dev_fe_components", label: "[Front] Component Generation from Specs/Design" },
        { id: "dev_fe_figma", label: "[Front] Figma/Screenshots to Code Conversion" },
        { id: "dev_fe_a11y", label: "[Front] Accessibility (WCAG) Review" },
        { id: "dev_fe_perf", label: "[Front] Performance and Bundle Optimization" },
        { id: "dev_fe_migration", label: "[Front] Framework Migration" },
        { id: "dev_be_endpoints", label: "[Back] REST/GraphQL Endpoint Generation" },
        { id: "dev_be_security", label: "[Back] Security and Vulnerability Review" },
        { id: "dev_be_db", label: "[Back] Database Migration Writing" },
        { id: "dev_be_queries", label: "[Back] SQL/ORM Query Optimization" },
        { id: "dev_be_docs", label: "[Back] Automated API Docs (OpenAPI/Swagger)" },
        { id: "dev_be_legacy", label: "[Back] Legacy Code Refactoring" },
        { id: "dev_be_logic", label: "[Back] NL Business Logic to Code" },
        { id: "dev_qa_unit", label: "[QA] Unit Tests from Existing Module" },
        { id: "dev_qa_e2e", label: "[QA] E2E Tests (Playwright/Cypress) from Flows" },
        { id: "dev_qa_cases", label: "[QA] Test Cases from Functional Requirements" },
        { id: "dev_qa_bugs", label: "[QA] Structured Bug Report from Free Text" },
        { id: "dev_qa_coverage", label: "[QA] Coverage Analysis with Suggestions" },
        { id: "dev_op_cicd", label: "[DevOps] CI/CD Pipeline Generation" },
        { id: "dev_op_docker", label: "[DevOps] Dockerfile and Config Review" },
        { id: "dev_op_logs", label: "[DevOps] Log Monitoring with Smart Alerts" },
        { id: "dev_op_docs", label: "[DevOps] Infrastructure Documentation" },
        { id: "dev_op_cost", label: "[DevOps] Cloud Cost Optimization Suggestions" },
        { id: "dev_fs_ticket", label: "[Full Stack] E2E Ticket to Full Codebase" },
        { id: "dev_fs_review", label: "[Full Stack] PR Code Review with Comments" },
        { id: "dev_fs_issues", label: "[Full Stack] Issue-to-Codebase Conversion" },
        { id: "dev_fs_onboarding", label: "[Full Stack] Tech Onboarding for New Devs" },
        { id: "dev_fs_debt", label: "[Full Stack] Tech Debt Detection & Prioritization" },
        { id: "dev_fs_readme", label: "[Full Stack] Automated README/Docs Maintenance" }
      ]
    },
    {
      groupLabel: "Integrations & Automations",
      options: [
        { id: "int_glue", label: "Connection between Systems (No native integration)" },
        { id: "int_sync", label: "Cross-platform Data Sync (CRM ↔ ERP, etc.)" },
        { id: "int_webhooks", label: "Webhook Listening & Cascade Execution" },
        { id: "int_crm_update", label: "Auto CRM Update Post-call/Meeting" },
        { id: "int_lead_enrich", label: "Lead Enrichment from Public Sources" },
        { id: "int_alerts", label: "Smart Alerts from Business Metrics" },
        { id: "int_auto_reports", label: "Automated Scheduled Reports Delivery" },
        { id: "int_contracts", label: "Standardized Document and Contract Generation" },
        { id: "int_external_api", label: "External API Actions Triggered by Internal Events" },
        { id: "int_workflows", label: "Tool Workflow Automation (Make, Zapier)" }
      ]
    }
  ]
};
