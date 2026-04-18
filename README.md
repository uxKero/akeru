# Akeru AgentLayer

Sitio web de **Akeru** — capa de agentes de IA para negocios. Construido con [Next.js](https://nextjs.org/) (App Router), React 19, TypeScript, CSS Modules y animaciones con Framer Motion.

## Requisitos

- [Node.js](https://nodejs.org/) **20 o superior** (recomendado: LTS)
- npm (incluido con Node)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La home está en `/` y el flujo de reserva en `/book`.

## Scripts

| Comando | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Compilación de producción |
| `npm run start` | Sirve la build (tras `build`) |
| `npm run lint` | ESLint |
| `npm run clean` | Elimina la carpeta `.next` |

## Variables de entorno

No son obligatorias para desarrollo local básico. Si necesitas enlaces absolutos u otras integraciones, copia el ejemplo:

```bash
cp .env.example .env.local
```

Edita `.env.local` según tu entorno. Los archivos `.env*` están en `.gitignore`; solo `.env.example` se versiona.

## Build de producción

```bash
npm run build
npm run start
```

La configuración usa `output: 'standalone'` para despliegues tipo contenedor o plataformas que empaquetan el servidor Node.

## Estructura del proyecto

- `app/` — rutas y layout (App Router), estilos globales
- `components/` — UI y secciones de la landing
- `context/` — proveedor de idioma (ES/EN)
- `data/` — copys, traducciones y datos estáticos
- `hooks/` — hooks reutilizables
- `lib/` — utilidades (p. ej. `cn` / merge de clases)

## Calidad de código

- **ESLint**: `.eslintrc.json` con `next/core-web-vitals` y `next/typescript`.
- **TypeScript**: modo estricto (`tsconfig.json`).

## Publicar en GitHub

1. Crea un repositorio vacío en GitHub (sin README ni `.gitignore` si ya los tienes aquí).
2. En la carpeta del proyecto:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Akeru AgentLayer site"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

3. Sustituye `TU_USUARIO` y `TU_REPO` por tu usuario y nombre del repo.

## Licencia

Uso privado del proyecto (`"private": true` en `package.json`). Ajusta la licencia si publicas el código.
