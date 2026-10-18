# Parth Sinha's portfolio

My personal site, built with Astro. It has notebook-style illustrations, an interactive CPU lesson, and a Mochi Mochi cat.

## Run it locally

You need Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

To build and preview the production site:

```sh
npm run build
npm run preview
```

## Docker

```sh
docker build --pull -t portfolio:local .
docker run --rm -p 18087:8080 portfolio:local
```

Then open `http://localhost:18087`. The site is served by Nginx on port 8080 inside the container. GitHub Actions deploys it the same way.

## Artwork

Illustrations are in `public/illustrations/` and SVG diagrams are in `src/assets/doodles/`. After you edit Mochi's drawing source, regenerate the poses:

```sh
python3 scripts/generate-mochi.py
```
