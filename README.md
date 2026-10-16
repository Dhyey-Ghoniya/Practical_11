# Practical 11: Containerization with Docker and Docker Compose

**Student Name:** Ghoniya Dhyey  
**Student ID:** 24CS024  
**Subject:** ITUE301 - AWDF (Advanced Web Development Frameworks)  
**Academic Year:** 2025-26  
**Institution:** Charotar University of Science and Technology (CHARUSAT), CSPIT  

---

## 🎯 Aim
To containerize the full-stack application using Docker and orchestrate multi-tier services (React frontend, Node/Express backend, and MongoDB database) using Docker Compose with inter-container networking and named persistent volumes.

## 🛠️ Architecture & Multi-Container Stack
```
docker-compose.yml
├── frontend (React 18 + Vite, Multi-stage Dockerfile, Port 5173:5173)
├── backend (Node.js 18 Alpine Express REST API, Port 5000:5000)
└── mongodb (Official mongo:6 image, Port 27017:27017, Volume: mongo-data)

Network: app-network (bridge)
frontend ──► backend ──► mongodb
```

## 📂 Project Structure
```
Practical_11/
├── backend/
│   ├── Dockerfile          # Node.js Alpine container definition
│   ├── .dockerignore       # Context exclusions (node_modules, .env)
│   ├── package.json
│   └── server.js           # REST API connected to mongodb service name
├── frontend/
│   ├── Dockerfile          # Multi-stage build (build stage + runtime preview)
│   ├── .dockerignore
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
├── docker-compose.yml      # Multi-service orchestration specification
└── README.md
```

## 🚀 Single-Command Startup
```bash
# Build images and start all 3 services in the foreground:
docker-compose up --build

# In another terminal, verify running containers:
docker ps
```
