# Stage 1: Build the Astro App
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project and build Astro
COPY puffy-parsec/. ./
RUN npm run build

# Stage 2: Serve the Built Files with Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .  # ✅ Copy the correct dist folder

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]