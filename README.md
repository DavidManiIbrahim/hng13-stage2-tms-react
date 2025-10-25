# HNG13 Stage 2 — Ticket App (React)

This repository contains a React + Vite implementation of the Stage 2 Ticket App used for the HNG internship stage project. The app provides a simple ticket management UI with authentication, protected routes, ticket creation and listing, and small reusable components (toasts, nav, ticket card).


## Key functionality

- Authentication: sign in / sign up flow (handled in `src/pages/Auth.jsx` with helpers in `src/utils/auth.js`)
- Protected routes: pages that require authentication are guarded by `src/components/ProtectedRoute.jsx`
- Tickets: list, view, and create tickets (pages in `src/pages/Tickets.jsx`, components in `src/components/TicketCard.jsx`)
- Dashboard: a simple summary/landing for authenticated users (`src/pages/Dashboard.jsx`)
- Toast notifications: global toasts for success/error feedback (`src/components/Toast.jsx`)
- Client-side storage helpers (`src/utils/storage.js`) for tokens/session data
- Routing and navigation: lightweight client routing with `react-router` (see `src/main.jsx` and `src/App.jsx`)

## Quick start (React app)

Prerequisites: Node.js (16+) and npm or yarn.

Install and run in development:

```sh
# from project root
cd hng13-stage2-ticketapp-react
npm install
npm run dev
```

Build and preview production build:

```sh
npm run build
npm run preview
```

Note: The above commands assume you are running them inside the `hng13-stage2-ticketapp-react` folder. Use your package manager of choice (npm/yarn/pnpm) as configured in `package.json`.

## Folder structure (React app)

Top-level (within `hng13-stage2-ticketapp-react`):

- `index.html` — Vite HTML entry
- `package.json` — project scripts and dependencies
- `vite.config.js` — Vite configuration
- `eslint.config.js` — ESLint config used in the project
- `public/` — public static assets
- `src/` — application source

Detailed `src/` layout and purpose:

- `src/main.jsx` — app bootstrap: renders `<App />`, mounts router and context providers
- `src/App.jsx` — top-level routes and layout
- `src/styles.css` — global styles used across pages
- `src/assets/` — images and static front-end assets

- `src/components/` — small, reusable UI pieces:
	- `Nav.jsx` — navigation bar
	- `ProtectedRoute.jsx` — route wrapper that redirects to auth when unauthenticated
	- `TicketCard.jsx` — visual card used to display a ticket in lists
	- `Toast.jsx` — toast notification component

- `src/pages/` — route-level pages:
	- `Landing.jsx` — public landing/home page
	- `Auth.jsx` — sign in / sign up page
	- `Dashboard.jsx` — authenticated user dashboard
	- `Tickets.jsx` — ticket listing and creation page
	- `NotFound.jsx` — 404 page

- `src/utils/` — small helpers and client-side utilities:
	- `auth.js` — authentication helpers (e.g., token handling, mock auth API calls)
	- `storage.js` — wrappers around localStorage/sessionStorage for tokens or user data

## Companion folders

This workspace also contains other implementations of the same Stage 2 ticket app in different frameworks (kept side-by-side for reference):

- `hng13-stage2-ticketapp-vue/` — Vue + Vite implementation (components and pages mirror the React app)
- `hng13-stage2-tms-twig/` — (empty or other implementation — check that folder for specifics)

When making changes, prefer editing the implementation you intend to work on (React vs Vue). Shared concepts (folder layout, API contract, component names) are intentionally similar across implementations.

## Notes for contributors

- Keep component and page responsibilities small and focused.
- For new features, add tests or a small manual verification checklist in the PR description.
- If you add new top-level scripts, update this README section with the commands and purpose.

## Quick reference

- Dev server: `npm run dev` (from `hng13-stage2-ticketapp-react`)
- Build: `npm run build`
- Preview production build: `npm run preview`

