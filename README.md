# Khadka Tours and Travels — Single Page Website

This repository contains a single-page HTML template for Khadka Tours and Travels. It is a static site (no backend) intended for local preview and quick editing.

Files created:
- `index.html` — The single-page site with Hero, Services, Why Us, Featured Tours, Contact & Booking, and Footer.
- `css/style.css` — Styles, color palette, responsive rules, and animations.
- `js/main.js` — Smooth scroll, mobile nav toggle, simple form handling, and on-scroll animations.
- `img/` — Placeholder SVG images. Replace these with high-resolution photos.

How to preview locally:
1. Open `index.html` in your browser. On macOS you can right-click and "Open With" your browser, or run:

```bash
open index.html
```

2. For a simple local server (recommended for proper map iframe & file behavior):

```bash
# Python 3.x
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Replace assets:
- Put your hero photo at `img/hero.svg` (or replace with a JPG/PNG and update `index.html` background-image).
- Replace `img/logo.svg` with your actual logo.
- Replace `img/work1.svg`, `img/work2.svg`, `img/work3.svg` with tour photos.

Next steps I can do for you (optional):
- Add a contact form backend (Netlify Forms, Formspree, or server endpoint).
- Improve accessibility (ARIA attributes, keyboard navigation tests).
- Generate optimized responsive images and a build pipeline.

Let me know which of these you'd like me to take next.