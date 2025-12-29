# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML landing page for Kiros, designed to be hosted on Vercel. The project uses assets and styles exported from Figma.

## Project Structure

- **figma-*.css files**: Large CSS files exported from Figma containing styles for different pages/sections
  - figma-home.css, figma-features.css, figma-about.css (as needed)
  - Designed for 1440px width viewport
  - Contains auto-layout flexbox styles from Figma
  - Style definitions are verbose due to Figma's export format

## Development

### Local Development

Serve static files locally using any simple HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server (install: npm i -g http-server)
http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

### Working with Figma Exports

- The CSS file is exported directly from Figma and contains auto-layout styles
- When re-exporting from Figma, replace the entire CSS file rather than manually editing
- The CSS uses Figma's naming conventions (e.g., "box", "wrapper", "text", "Frame")
- Classes and selectors may need to be added manually to HTML files to apply these styles

## Deployment

### Vercel Deployment

This project deploys to Vercel as a static site via the Vercel console (web dashboard). The repository is connected to Vercel through the web interface, and deployments happen automatically on git push.

The project is configured to serve static HTML/CSS/JS files directly.

## Architecture

This is a simple static site architecture:
- No build process required
- No JavaScript framework
- Pure HTML/CSS with Figma-generated styles
- Vercel handles static file serving

## File Organization

When adding new pages or sections:
- Create corresponding HTML files (e.g., `index.html`, `about.html`)
- Keep Figma exports as separate CSS files per page/section if needed
- Consider extracting common styles into a shared CSS file to reduce duplication
