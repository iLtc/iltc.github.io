# CLAUDE.md — AI Assistant Guide for iltc.github.io

## Project Overview

This is a **static personal portfolio/homepage** for Alan Luo (iLtc), deployed via GitHub Pages at `iltc.io`. It is a pure HTML/CSS/JavaScript site with no build step, no package manager, and no server-side code.

## Repository Structure

```
iltc.github.io/
├── index.html              # Main (and only) page — the live site entry point
├── CNAME                   # Custom domain mapping → iltc.io
├── manifest.json           # PWA manifest (icons, theme color, standalone display)
├── browserconfig.xml       # Windows tile configuration
├── profile.png             # Profile photo (also in /images/)
├── resume.pdf              # Downloadable resume
├── googlefd9c56e6f5bb5853.html  # Google Search Console verification
├── favicon.ico / *.png     # Favicon assets for all platforms
├── safari-pinned-tab.svg
│
├── css/
│   ├── new.css             # PRIMARY custom stylesheet — current landing page styles
│   ├── main.css            # Legacy portfolio template styles (Geek theme)
│   ├── responsive.css      # Legacy responsive media queries
│   ├── animate.css         # CSS animation library
│   ├── magnific-popup.css  # Lightbox/popup styles
│   ├── bootstrap.min.css   # Bootstrap (minified)
│   └── font-awesome.min.css # Font Awesome (minified)
│
├── js/
│   ├── main.js             # PRIMARY custom JS — animation, nav, utilities
│   ├── easypiechart.js     # Pie chart animation library
│   ├── jquery.min.js       # jQuery (minified)
│   ├── bootstrap.min.js    # Bootstrap JS (minified)
│   ├── magnific-popup.min.js # Lightbox plugin
│   ├── waypoints.min.js    # Scroll position detection
│   ├── counterup.min.js    # Number counter animation
│   └── inview.min.js       # Viewport visibility detection
│
├── fonts/
│   ├── fontawesome-*/      # Font Awesome icon fonts (eot, svg, ttf, woff, woff2, otf)
│   ├── glyphicons-*/       # Bootstrap Glyphicons (eot, svg, ttf, woff, woff2)
│   └── RookiesShowtimes.*  # Custom decorative webfont (woff, woff2)
│
├── images/
│   ├── portfolio/          # Project screenshots
│   ├── blog/               # Blog post images
│   ├── bg/                 # Background images
│   ├── exprience/          # Experience section images (note: typo in folder name)
│   └── education/          # Education section images
│
├── .travis.yml             # CI: mirrors repo to Gitee automatically
└── .gitignore              # Ignores: macOS/.DS_Store, JetBrains IDEs, build artifacts
```

## Active vs. Legacy Files

**Currently active (index.html uses these):**
- `css/new.css` — all current styles for the live landing page
- `js/main.js` (partially — dynamic text animation and Google Analytics)
- Font Awesome 5.11.1 loaded via CDN in `<head>`

**Legacy/unused** (from an older portfolio template, not linked in current index.html):
- `css/main.css`, `css/responsive.css`, `css/animate.css`, `css/magnific-popup.css`
- `js/easypiechart.js`, `js/magnific-popup.min.js`, `js/waypoints.min.js`, `js/counterup.min.js`, `js/inview.min.js`
- `images/portfolio/`, `images/blog/`, `images/bg/`, `images/exprience/`, `images/education/`

These legacy files are retained but not referenced by the current page.

## Site Architecture

The current site (`index.html`) is a minimal, single-page landing/homepage:

```
<main>
  <section class="content">
    <h1>iLtc</h1>
    <p>[animated text — cycles through phrases]</p>
  </section>
</main>
<footer>
  [social icon links: LinkedIn, GitHub, Maps, Books, Games, Blog]
</footer>
```

**Dynamic text animation** — inline `<script>` in index.html cycles randomly through:
```javascript
text_list = [
  "Hello World", "Technology and I", "PHP Lover", "Watermelon Lover",
  "Ruby on Rails", "Python and Flask", "Swift and SwiftUI",
  "Amazon Web Services", "Heroku", "WordPress"
]
```
Uses jQuery to type-animate each phrase letter-by-letter every 5 seconds.

**External links from footer:**
- LinkedIn: `https://www.linkedin.com/in/alantluo/`
- GitHub: `https://github.com/iLtc`
- Maps: `https://maps.iltc.app`
- Books: `https://lists.iltc.app/#/books`
- Games: `https://lists.iltc.app/#/games`
- Blog: `https://blog.iltc.io`

## Key Conventions

### HTML
- HTML5 doctype and semantic elements (`<main>`, `<section>`, `<footer>`)
- Meta viewport tag for responsive design
- Google Analytics via `gtag.js` in footer (`G-PDBDF99Y6E`)
- CDN-loaded Font Awesome (`https://use.fontawesome.com/releases/v5.11.1/css/all.css`)

### CSS (`css/new.css`)
- Flexbox used for centering (both axes) on the hero section
- `h1` title: `font-size: 7.35rem`, `font-weight: 900`
- Animated text uses monospace font
- Footer social links have hover color transitions
- No CSS variables; colors are hardcoded
- Responsive positioning uses `position: fixed` with `bottom`/`left`/`right` offsets

### JavaScript
- jQuery loaded from CDN; all custom JS uses `$()` syntax
- No ES modules, no transpilation — plain ES5-compatible code
- `main.js` includes utilities:
  - Base64 decoding for contact info (spam protection)
  - String formatting with `{0}` placeholders
  - Scroll-based sticky nav, section tracking, pie chart animation

### Git & Deployment
- **Deployment**: Push to `master` branch → GitHub Pages auto-deploys to `iltc.io`
- **CI**: `.travis.yml` mirrors pushes to Gitee (Chinese Git platform) using an encrypted token
- **Commit style**: Conventional commits preferred — `feat:`, `fix:`, descriptive message
- **No build step**: Push files directly; what's in the repo is what's served
- **Branch strategy**: Feature work on `claude/*` branches; merge to `master` to deploy

## Development Workflow

Since there is no build system, development is straightforward:

1. **Edit files directly** — HTML, CSS, JS are served as-is
2. **Test locally** — open `index.html` in a browser, or use a simple HTTP server:
   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```
3. **Commit and push to master** — GitHub Pages deploys automatically (usually within 1–2 minutes)

There are **no tests**, **no linters**, and **no build commands** in this repository.

## Making Changes — Guidelines for AI Assistants

### Adding/changing text
- Edit `index.html` directly — it's self-contained and well-structured
- The animated text list is in an inline `<script>` at the bottom of `index.html`

### Styling changes
- Edit `css/new.css` for the current live site
- Do **not** edit the minified files (`bootstrap.min.css`, `font-awesome.min.css`)
- Do **not** edit `main.css` or `responsive.css` unless intentionally restoring legacy template features

### Adding icons
- Font Awesome 5 is available — use `<i class="fab fa-*">` or `<i class="fas fa-*">` syntax
- Browse icons at fontawesome.com/icons (free tier)

### Updating social links
- All links are in the `<footer>` section of `index.html`
- LinkedIn, GitHub, Maps, Books, Games, Blog — update `href` attributes directly

### Updating resume
- Replace `resume.pdf` in the root directory
- The download link in footer is currently commented out in `index.html` — uncomment if needed

### Adding new pages
- Create a new `.html` file in the root (e.g., `about.html`)
- Link to it from `index.html` — no routing configuration needed
- GitHub Pages serves all `.html` files at their path (e.g., `iltc.io/about`)

### Images
- Place new images in an appropriate subfolder under `images/`
- Note: the `images/exprience/` folder has a typo — preserve it to avoid broken references
- Prefer optimized/compressed images for fast load times (this is a portfolio site)

## Analytics

Google Analytics 4 is configured with tag ID `G-PDBDF99Y6E`. The gtag script is loaded in the footer of `index.html`. Do not remove or modify the analytics tag without owner approval.

## Domain & Hosting

| Property | Value |
|---|---|
| Domain | `iltc.io` |
| Host | GitHub Pages |
| CNAME | `CNAME` file in repo root |
| Gitee Mirror | Auto-synced via Travis CI |
| PWA | Enabled (manifest.json, icons) |

## What NOT to Do

- Do not add a `package.json` or npm dependencies without explicit instruction — this is intentionally dependency-free
- Do not add a build step (webpack, Vite, etc.) without explicit instruction
- Do not modify minified library files (`*.min.js`, `*.min.css`)
- Do not push directly to `master` without testing locally first
- Do not remove the Google Analytics tag
- Do not change the CNAME file (this would break the custom domain)
- Do not rename the `images/exprience/` directory without updating all references
