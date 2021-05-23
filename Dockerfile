# ---- Base Node ----
FROM node:16-alpine AS base

# set working directory
WORKDIR /app


# ---- Dependencies ----
FROM base AS dependencies

RUN apk add --no-cache make gcc g++ python3

# install node packages
RUN npm set progress=false && npm config set depth 0

COPY package*.json ./
RUN npm install --only=production --loglevel info


# ---- Build ----
FROM dependencies AS build
# copy production node_modules
RUN npm install --only=development --loglevel info

COPY . .
RUN npm run build


# ---- final ----
FROM base AS final
RUN apk add --no-cache curl

COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=build /app/built /app/built


# --- Entrypoint ---
ENV HTTP_PORT=3000
EXPOSE 3000

VOLUME /app/log
VOLUME /app/db
#VOLUME /app/conf #need some work to move the config file into a seperate folder

HEALTHCHECK --interval=1m --timeout=20s --start-period=30s \
   CMD curl -f --max-time 18 "http://127.0.0.1:${HTTP_PORT}/health" || exit 1

CMD ["node","--enable-source-maps","/app/built/index.js","--patchall=run"]