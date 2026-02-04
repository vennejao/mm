# Memento22 - Site

What you have:
- memento22.html: fully updated accessible & SEO-optimized static HTML.
- server.js: Node/Express example to receive bookings.
- Next.js page and API route examples: pages/memento22.jsx + pages/api/book.js
- Tailwind build files: tailwind.config.js, postcss.config.js, styles/tailwind-input.css
- CSS-only alternative: memento22-alternative.css

Quick start (Next.js):
1. Install:
   npm install
2. Dev:
   npm run dev
3. Build Tailwind CSS (for static builds or to replace CDN):
   npm run tailwind:build
4. Build for production:
   npm run build && npm run start

Notes:
- Replace Google Analytics ID (G-XXXXXXXXXX).
- Replace contact email & phone in structured data and footer.
- For production: compile Tailwind (as above), serve CSS from /public/styles, and purge unused classes via the content paths in tailwind.config.js.
- Optimize images: pre-generate WebP and responsive sizes. Tools: Squoosh, imagemin, or an image CDN.
- Fonts: consider self-hosting WOFF2 and preload critical font files.
- Accessibility: run axe / Lighthouse and fix any remaining issues.