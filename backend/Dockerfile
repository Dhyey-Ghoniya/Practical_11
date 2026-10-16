FROM node:18-alpine

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./
RUN npm install --production

# Copy application source code
COPY . .

# Expose backend REST API port
EXPOSE 5000

ENV PORT=5000
ENV MONGO_URI=mongodb://mongodb:27017/taskdb

CMD ["node", "server.js"]
