# syntax=docker/dockerfile:1
ARG NODE_IMAGE=node:22-alpine
ARG NGINX_IMAGE=nginx:1.29-alpine-slim

FROM ${NODE_IMAGE} AS build
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

COPY astro.config.mjs tsconfig.json ./
COPY src/ ./src/
COPY public/ ./public/
RUN npm run build

FROM ${NGINX_IMAGE} AS runtime
LABEL org.opencontainers.image.title="Parth Sinha portfolio" \
      org.opencontainers.image.description="Static Astro portfolio served by Nginx" \
      org.opencontainers.image.source="https://github.com/sinhaparth5/portfolio"

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

USER nginx
EXPOSE 8080
STOPSIGNAL SIGQUIT
HEALTHCHECK NONE

# Validate once at startup, then replace the shell with Nginx as PID 1.
ENTRYPOINT []
CMD ["sh", "-ec", "test -s /usr/share/nginx/html/index.html; nginx -t; exec nginx -g 'daemon off;'"]
