# Nodo Landing Page

This project contains the source for a marketing landing page built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**. The page showcases Nodo's features and partners using a set of styled sections and custom components.

## Prerequisites

- Node.js 18 or later
- npm (comes with Node.js)

## Installation

Install the dependencies once Node.js is available:

```bash
npm install
```

## Development

Start the development server with hot reloading:

```bash
npm run dev
```

The page will be served at [http://localhost:5173](http://localhost:5173) by default.

## Production Build

Generate an optimized build in the `dist` directory:

```bash
npm run build
```

You can preview the build locally with:

```bash
npm run preview
```

## Image Assets

Local SVG assets are stored under `src/assets`. Many of the larger illustrations are referenced from URLs exported from Figma (e.g. `http://localhost:3845/assets/...`). Ensure those resources are reachable when running or building the site, otherwise placeholder images may appear.

## Notes

The repository also contains an ESLint configuration (`npm run lint`) which currently reports an issue in `src/components/ui/button.tsx`. Linting is optional for running and building the page.
