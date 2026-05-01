# Renovo Classic Engineering

Premium classic car restoration · Coming soon to Dallas–Fort Worth.

## Tech Stack

- **React 18** + **Vite** — modern, fast build tool
- **Framer Motion** — sophisticated animations (text reveals, scroll triggers, layout transitions)
- **Lenis** — buttery-smooth scrolling
- Cream + brass workshop palette · monochrome RCE logo · Cormorant Garamond + Inter typography

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Root component, sets up Lenis smooth scroll
├── main.jsx             # React entry point
├── components/
│   ├── Logo.jsx         # Monochrome RCE logo (cream + brass, no red)
│   ├── Nav.jsx          # Sticky nav with scroll-spy + progress bar
│   ├── Footer.jsx       # Footer with sitemap, contact, brand
│   ├── AnimatedText.jsx # Word-by-word slide-up reveal (used everywhere)
│   └── FadeIn.jsx       # Simple scroll-triggered fade-up wrapper
├── sections/
│   ├── Hero.jsx         # Tagline, badge, journey strip, scroll cue
│   ├── About.jsx        # Elliott's story + Alfa Spider illustration
│   ├── Services.jsx     # 5 services as numbered list (engine work, restorative work, maintenance, custom, laser cleaning)
│   ├── Careers.jsx      # Admin + Technician roles
│   ├── Instagram.jsx    # Slideshow placeholder for @ellcof posts
│   └── Enquiry.jsx      # Form with the "Coffee order" field
└── styles/
    └── global.css       # Theme tokens, base typography, utilities
```

## Customising

### Replacing placeholder Instagram graphics with real photos

Open `src/sections/Instagram.jsx`. Each cell currently renders an inline SVG via `renderSVG()`. Replace with `<img>` tags:

```jsx
<a className="insta__cell" href="https://instagram.com/p/REAL_POST_URL/">
  <img src="/instagram/post-1.jpg" alt="Engine rebuild" />
  <div className="insta__cell-overlay">...</div>
</a>
```

Drop your photos into `public/instagram/` and reference them as `/instagram/post-1.jpg`.

### Going live with a real Instagram feed

The cleanest free option is [Behold.so](https://behold.so) — connect your Instagram account, copy their embed snippet, and paste it inside the `<div className="insta__viewport">` in place of the slideshow.

### Updating SEO meta

All meta tags live in `index.html`. Update the URL, OG image, and description there.

### Styling

Theme tokens are defined as CSS variables in `src/styles/global.css`:

```css
--cream:       #f4ecd8;   /* primary accent */
--brass:       #b8945c;   /* secondary accent */
--bg-base:     #0e0e0f;   /* main background */
```

Change those and the entire site updates.

## Deployment

The site builds to a static `dist/` folder. Deploy to:

- **Vercel** — `vercel deploy` (zero config)
- **Netlify** — drop the `dist` folder, or connect GitHub
- **Cloudflare Pages** — connect GitHub repo

## SEO Checklist

- [x] Semantic HTML (`<main>`, `<section>`, `<nav>`, `<footer>`)
- [x] Single `<h1>`, structured heading hierarchy
- [x] Meta description, keywords, author
- [x] Open Graph + Twitter Card tags
- [x] Schema.org `AutomotiveBusiness` JSON-LD
- [x] `lang="en"` on `<html>`
- [x] Canonical URL placeholder
- [x] Preconnect for fonts (performance)
- [x] `aria-label` on icon-only links
- [x] `alt` text on logo

When deployed, also add:
- `robots.txt` and `sitemap.xml` (Vite plugins exist for both)
- A real `og-image.jpg` (1200×630px)
- Update canonical URL to your real domain

---

Built with care · England → Texas
