
# Portfolio (Vite + React + Tailwind)

Personal portfolio site built with React + TypeScript and styled with Tailwind. Includes a light/dark theme toggle and an optional “Professional Reviews” section backed by Firebase Firestore.

## Features

- **Responsive single-page app** (SPA) with multiple portfolio sections.
- **Light/Dark theme** with persisted preference (`localStorage`).
- **Professional Reviews**
	- Read reviews from Firestore on page load.
	- Add review modal (name, position, rating, review text).
	- If Firebase env vars are missing, reading returns an empty list and adding is disabled.

## Tech Stack

- **Vite** (build + dev server)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Firebase (Firestore)** for reviews
- **Docker + Nginx** for production container

## Getting Started (Local Dev)

### Prerequisites

- Node.js (recommended: **Node 22** to match the Docker build image)
- pnpm (recommended) or npm

If you don’t have pnpm yet:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Install

```bash
pnpm install
```

### Run dev server

```bash
pnpm dev
```

Vite will print the local URL (typically `http://localhost:5173`).

## Environment Variables (Firebase)

Firebase is optional, but required to use the Reviews feature.

Create a `.env` file in the project root:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...

# Optional
VITE_FIREBASE_MEASUREMENT_ID=...
```

Vite only exposes environment variables prefixed with `VITE_`.

### Firestore data model

Reviews are stored in a Firestore collection named `reviews`.

Document shape:

```ts
interface Review {
	name: string;
	rating: number; // 1..5
	position: string;
	text: string;
};
```

## Firebase / Firestore Setup (for Reviews)

1. Create a Firebase project.
2. Enable **Firestore Database**.
3. (Recommended for development) Start with permissive rules, then tighten before production.
4. Copy your Firebase web app config values into `.env.local`.

Notes:

- If Firebase is not configured, the app still runs normally—reviews will simply be empty and adding is disabled.

## Scripts

- `pnpm dev` — start Vite dev server
- `pnpm build` — typecheck (`tsc -b`) then build (`vite build`)
- `pnpm preview` — preview the production build locally
- `pnpm lint` — run ESLint

## Production (Docker + Nginx)

This repo includes a multi-stage Docker build:

1. **Node build stage** runs `npm install` + `npm run build`
2. **Nginx stage** serves the `dist/` folder and provides SPA routing (`try_files ... /index.html`)

### Build the image

You must pass Firebase values as build args (they’re embedded at build time by Vite):

```bash
docker build \
	--build-arg VITE_FIREBASE_API_KEY=... \
	--build-arg VITE_FIREBASE_AUTH_DOMAIN=... \
	--build-arg VITE_FIREBASE_PROJECT_ID=... \
	--build-arg VITE_FIREBASE_STORAGE_BUCKET=... \
	--build-arg VITE_FIREBASE_MESSAGING_SENDER_ID=... \
	--build-arg VITE_FIREBASE_APP_ID=... \
	--build-arg VITE_FIREBASE_MEASUREMENT_ID=... \
	-t portfolio:latest .
```

### Run the container

```bash
docker run --rm -p 8080:80 portfolio:latest
```

Then open `http://localhost:8080`.

### Docker Compose

`docker-compose.yml` is provided and forwards Firebase env vars as build args.

```bash
docker compose up --build
```

Note: the compose file currently uses `ports: - "80"` (short syntax). That exposes container port 80, for use with reverse proxy services, like Traefik, or more complex deployment methods, like Dokploy or Coolify. If you want a stable port, change it to something like:

```yaml
ports:
	- "8080:80"
```

## Project Structure

```text
.
├─ src/
│  ├─ main.tsx              # React entrypoint
│  ├─ App.tsx               # Main page composition + reviews modal
│  ├─ firebase.ts           # Firebase + Firestore initialization
│  ├─ reviewsApi.ts         # Firestore read/write helpers
│  ├─ contexts/
│  │  └─ ThemeContext.tsx   # Theme state + CSS variables
│  └─ components/           # Page sections (Hero, Tech, Reviews, Footer, ...)
├─ nginx.conf               # SPA routing for production container
├─ Dockerfile               # Vite build → Nginx serve
└─ vite.config.ts           # Vite config (React + Tailwind)
```

## Customization Notes

- Some sections accept an `isOutOfCollege` prop and are currently **disabled by default** in `src/App.tsx`. If you want those sections to render, pass `isOutOfCollege={true}` into the relevant components.
- Contact links are in the Hero section and Footer.

## Troubleshooting

- **Reviews don’t show up**: confirm Firestore is enabled and your Firebase env vars are set (`VITE_FIREBASE_*`).
- **“Firestore is not configured” error**: you’re missing one or more required Firebase variables.
- **Docker build doesn’t pick up env vars**: ensure you pass them as `--build-arg ...` (Vite embeds them during build).

