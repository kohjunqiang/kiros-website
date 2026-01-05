# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js landing page for Kiros, designed to be hosted on Vercel. Built with TypeScript and Tailwind CSS.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles (Tailwind)
│   ├── company/           # Company page
│   ├── features/          # Features page
│   ├── join-us/           # Join us / signup page
│   ├── terms-of-service/  # Terms of service page
│   └── thankyou/          # Thank you page
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   ├── sections/          # Page sections organized by page
│   │   ├── home/
│   │   ├── features/
│   │   ├── company/
│   │   └── ...
│   └── ui/                # Reusable UI components (Badge, PatternDivider)
└── lib/                   # Utility functions
public/
├── images/                # Page-specific images
├── icons/                 # SVG icons
├── logos/                 # Brand logos
└── decorative/            # Decorative SVG elements
```

## Development

### Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Deployment

### Vercel Deployment

This project deploys to Vercel via the Vercel console (web dashboard). The repository is connected to Vercel through the web interface, and deployments happen automatically on git push.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

## Architecture Notes

- Components are organized by page/section for easy navigation
- Layout components (Navbar, Footer) are shared across all pages
- Each page imports its sections from `components/sections/<page-name>/`
- UI components in `components/ui/` are reusable across the site
