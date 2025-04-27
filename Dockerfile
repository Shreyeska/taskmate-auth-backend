FROM node:18-slim

# Install OpenSSL and build tools
RUN apt-get update && apt-get install -y openssl python3 make g++


WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate

# Copy source code
COPY . .


EXPOSE 3157

CMD ["npm", "start"]