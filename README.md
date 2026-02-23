# BLOCKMeet

An ultra-interactive Minecraft-inspired 8-bit pixel world landing page that redirects visitors to Cal.com booking links. Built with Vite + React + TypeScript + TailwindCSS + Framer Motion.

## Features

- **Fullscreen pixel world** rendered on HTML canvas with procedural sky, sun, clouds, mountains, grass, water, trees, and particles
- **Interactive block placement** — click the ground to place colored blocks, right-click to remove
- **Parallax scrolling** through multiple content sections
- **8-bit sound effects** generated with WebAudio (no external files)
- **CRT scanline toggle**, performance mode, and sound controls
- **Easter eggs**: Konami code triggers night mode; typing `/spawn` opens a quick-links modal
- **XP bar** that fills as you interact
- **prefers-reduced-motion** support
- **Mobile responsive** with touch support (tap to place, long-press to remove)

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173/blockmeet/` in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub as `blockmeet`
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow builds and deploys automatically
4. Your site will be live at `https://<username>.github.io/blockmeet/`

## Configuration

Edit `src/config.ts` to change booking links, title, subtitle, or timezone:

```ts
export const SITE = {
  repoBase: "/blockmeet/",
  title: "BLOCKMeet",
  subtitle: "Book a session in the pixel world.",
  timezone: "Asia/Kolkata",
  links: {
    min15: "https://cal.com/yashveer/15min",
    min30: "https://cal.com/yashveer/30min",
  },
};
```

## Project Structure

```
├── index.html
├── vite.config.ts          # base: "/blockmeet/"
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── config.ts           # ← edit links/name here
│   ├── styles.css
│   ├── components/
│   │   ├── Hud.tsx          # top bar with toggles + XP bar
│   │   ├── CTAButtons.tsx   # booking CTA buttons + copy dropdown
│   │   ├── PixelCard.tsx    # reusable animated card
│   │   └── Modal.tsx        # /spawn easter egg modal
│   └── canvas/
│       ├── world.ts         # main renderer + animation loop
│       ├── palette.ts       # color palette
│       ├── sprites.ts       # procedural sprite drawing helpers
│       └── input.ts         # mouse/touch input handling
└── .github/workflows/
    └── deploy.yml           # GitHub Pages Actions deploy
```

## Easter Eggs

- **Konami Code** (↑↑↓↓←→←→BA): Toggles night mode with stars and glowing particles
- **`/spawn`**: Opens a quick-links modal
