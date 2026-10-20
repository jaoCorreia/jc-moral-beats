FROM node:22-alpine

WORKDIR /app

# Install dependencies first for Docker caching
COPY package*.json ./
RUN npm install --omit=dev

# Copy application files
COPY . .

# Run build inside container if needed
RUN npm run build || true

EXPOSE 4321

ENV NODE_ENV=production
ENV PORT=4321

CMD ["node", "server.js"]
