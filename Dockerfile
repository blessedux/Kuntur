# Stage 1: Build the Astro App
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY puffy-parsec/package.json puffy-parsec/package-lock.json ./
RUN npm install

# Copy the Astro project files and build the site
COPY puffy-parsec/. ./puffy-parsec/
WORKDIR /app/puffy-parsec
RUN npm run build

# Stage 2: Serve the Built Files with Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/puffy-parsec/dist .  # ✅ Fixed the path

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]