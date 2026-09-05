# Parth Sinha's portfolio

An Astro site with notebook illustrations, an interactive CPU lesson, and a Mochi Mochi cat.

## Development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev -- --background
```

Manage the background server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

```sh
npm run build
npm run preview
```

## Docker

Build with Docker BuildKit (the default in current Docker versions):

```sh
docker build --pull -t portfolio:local .
docker run --rm --name portfolio -p 18087:8080 \
  --read-only --tmpfs /tmp:rw,noexec,nosuid,size=16m \
  --cap-drop=ALL --security-opt=no-new-privileges \
  portfolio:local
```

Open `http://localhost:18087`. The container listens on **8080**; the Drone deployment maps external port **18087** to it.

The build stage installs dependencies from `package-lock.json` and caches npm downloads. The final image contains the static output and the official Nginx Alpine slim runtime. `.dockerignore` limits the build context to the files needed to build and serve the site.

Nginx runs as its unprivileged `nginx` user. On each container start, it checks that the homepage exists and validates its configuration, then runs in the foreground as PID 1. There is **no periodic Docker health check**. Startup errors stop the container; logs go to stdout/stderr, and SIGQUIT requests a graceful shutdown.

Only `/tmp` needs to be writable. Nginx compresses text responses, caches fingerprinted `/_astro/` assets for one year, and revalidates HTML and other files. Unknown paths return the custom page with HTTP 404.

Base image versions can be overridden during a build:

```sh
docker build --build-arg NODE_IMAGE=node:22-alpine \
  --build-arg NGINX_IMAGE=nginx:1.29-alpine-slim \
  -t portfolio:local .
```

Tags receive upstream updates, so rebuild with `--pull` regularly. For a reproducible release, supply reviewed digest-pinned image references through the same build arguments.

## Artwork

Active illustrations live in `public/illustrations/` and SVG diagrams in `src/assets/doodles/`. Regenerate the matching pet poses after editing their shared drawing source:

```sh
python3 scripts/generate-mochi.py
```
