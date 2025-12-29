# Parth Sinha - Portfolio Website

A modern, high-performance portfolio website built with Astro, featuring dynamic content from GitHub and Medium, smooth GSAP animations, and comprehensive SEO.

## Features

- **Single-Page Design** - Smooth scrolling experience with animated sections
- **Dynamic Content** - Automatically fetches latest projects from GitHub and blog posts from Medium
- **GSAP Animations** - Scroll-triggered animations with parallax effects
- **GitHub Integration** - Live GitHub activity stats and contribution heatmap
- **Optimized Images** - Automatic WebP/AVIF conversion with Astro Image
- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Performance First** - Code splitting, lazy loading, and aggressive caching strategies
- **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- **PWA Ready** - Web app manifest for installability
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework:** [Astro 5.16.6](https://astro.build)
- **Styling:** [Tailwind CSS v4.1.18](https://tailwindcss.com)
- **Animations:** [GSAP 3.14.2](https://greensock.com/gsap/) with ScrollTrigger
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com) with Workers
- **Fonts:** Playfair Display (headings) & Inter (body)
- **Image Optimization:** Astro Image with Cloudflare Image Service

## Project Structure

```
portfolio/
├── public/
│   ├── images/              # Project and blog images
│   ├── _headers             # Security and caching headers
│   ├── robots.txt           # Search engine crawling rules
│   ├── manifest.json        # PWA manifest
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.astro       # Hero section with typing animation
│   │   ├── About.astro      # About section with GitHub stats
│   │   ├── Projects.astro   # GitHub projects integration
│   │   ├── Blogs.astro      # Medium blog feed integration
│   │   ├── Contact.astro    # Contact form and social links
│   │   ├── Footer.astro     # Footer with navigation
│   │   └── Navbar.astro     # Navigation bar
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with SEO
│   ├── pages/
│   │   └── index.astro      # Homepage
│   └── styles/
│       └── global.css       # Global styles and CSS variables
├── astro.config.mjs         # Astro configuration
├── wrangler.jsonc           # Cloudflare Workers config
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sinhaparth5/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your site URL:
```env
SITE_URL=https://parthsinha.com
```

## Development

Start the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally |
| `pnpm astro check` | Run type checking |

## Deployment

This site is configured for deployment on Cloudflare Pages:

1. Build the project:
```bash
pnpm build
```

2. Deploy using Wrangler:
```bash
pnpm run deploy
```

### Environment Variables

Set the following in your Cloudflare Pages dashboard or `wrangler.jsonc`:

- `SITE_URL` - Your production domain (e.g., `https://parthsinha.com`)

## Performance Features

- **Code Splitting** - Separate chunks for GSAP and vendor code
- **Minification** - Terser minification with console removal
- **Image Optimization** - Automatic format conversion and lazy loading
- **Resource Hints** - DNS prefetch and preconnect for external resources
- **Link Prefetching** - Hover-based prefetching for faster navigation
- **Caching Strategy** - Aggressive caching for static assets (1 year), no-cache for HTML

## Security Features

- **Content Security Policy** - Prevents XSS and injection attacks
- **HSTS** - HTTP Strict Transport Security with preload
- **X-Frame-Options** - Prevents clickjacking
- **X-Content-Type-Options** - Prevents MIME sniffing
- **Permissions Policy** - Disables unnecessary browser features

## Customization

### Update Personal Information

Edit the following files:

- **Name & Bio:** `src/components/Hero.astro`
- **Skills:** `src/components/About.astro`
- **GitHub Username:** `src/components/Projects.astro` and `src/components/About.astro`
- **Medium Username:** `src/components/Blogs.astro`
- **Contact Info:** `src/components/Contact.astro`
- **SEO Data:** `src/layouts/Layout.astro`

### Update Theme Colors

Modify CSS variables in `src/styles/global.css`:

```css
:root {
  --color-cream: #F5F1E8;
  --color-dark: #1A1A1A;
  --color-charcoal: #2B2B2B;
  --color-gray: #6B6B6B;
  --color-light-gray: #D4D0C8;
}
```

## APIs Used

- **GitHub API:** `https://api.github.com/users/{username}/repos`
- **Medium RSS:** `https://medium.com/feed/@{username}`
- **GitHub Streak Stats:** `https://github-readme-streak-stats.herokuapp.com`
- **GitHub Contributions:** `https://ghchart.rshah.org`

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

- **Email:** sinhaparth555@gmail.com
- **LinkedIn:** [linkedin.com/in/parth-sinha18](https://www.linkedin.com/in/parth-sinha18)
- **GitHub:** [github.com/sinhaparth5](https://github.com/sinhaparth5)
- **Twitter/X:** [@sinhaparth555](https://x.com/sinhaparth555)
- **Medium:** [parth-sinha.medium.com](https://parth-sinha.medium.com)

---

Built with ❤️ by Parth Sinha
