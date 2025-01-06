# Stage 1: Build the Astro app
FROM node:18 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project and build Astro
COPY . .
RUN npm run build

# Stage 2: Serve the built Astro site using Caddy
FROM caddy:2
WORKDIR /srv
COPY --from=builder /app/dist /srv
EXPOSE 80

# Start Caddy's static file server
CMD ["caddy", "file-server", "--root", "/srv"]