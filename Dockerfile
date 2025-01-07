# Build Astro App
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY puffy-parsec/package.json puffy-parsec/package-lock.json ./
RUN npm install

# Copy app files
COPY puffy-parsec/. ./puffy-parsec/
WORKDIR /app/puffy-parsec
RUN npm run build

# Debug: List files in /app/puffy-parsec to check if dist/ is created
RUN echo "📂 Checking build output in /app/puffy-parsec" && ls -la /app/puffy-parsec && echo "✅ dist/ folder should be here!"

# Serve with Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Debug: Show available directories before copying
RUN echo "🛠 Before Copy: Existing directories in nginx container:" && ls -la /usr/share/nginx/html

# Copy built files
COPY --from=builder /app/puffy-parsec/dist .  

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]