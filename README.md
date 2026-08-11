# The First-Class Experience

A high-fidelity interactive prototype for martial arts gym onboarding.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

**Member flow** (mobile-first, linear):
- `/member/confirmation` → `/member/prepare` → `/member/etiquette` → `/member/navigation` → `/member/coach` → `/member/arrival` → `/member/feedback` → `/member/complete`

**Coach flow** (desktop):
- `/coach/dashboard`

**Split-screen demo** (presentations):
- `/demo` — member journey + coach dashboard side by side

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- React Router DOM
- All data mocked locally — no backend
