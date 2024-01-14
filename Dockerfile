FROM node:20-alpine AS runtime
WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80

CMD node ./dist/server/entry.mjs
