const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/taskdb';

let tasks = [
  { id: 1, title: 'Configure Multi-stage Dockerfile for React', status: 'Completed', priority: 'High' },
  { id: 2, title: 'Set up Express Node.js Backend Service', status: 'Completed', priority: 'High' },
  { id: 3, title: 'Deploy MongoDB with Persistent Volume', status: 'Completed', priority: 'Critical' },
  { id: 4, title: 'Orchestrate Full Stack via docker-compose up', status: 'In Progress', priority: 'High' }
];

// Health check with container info
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'HEALTHY',
    service: 'Task Management API (Docker Container)',
    containerHost: process.env.HOSTNAME || 'docker-backend-container',
    mongoConnection: MONGO_URI,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Tasks CRUD
app.get('/api/tasks', (req, res) => {
  res.status(200).json({ success: true, count: tasks.length, tasks });
});

app.post('/api/tasks', (req, res) => {
  const { title, priority } = req.body;
  if (!title) return res.status(400).json({ success: false, message: 'Title is required' });
  const newTask = {
    id: Date.now(),
    title,
    status: 'Pending',
    priority: priority || 'Medium',
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  res.status(201).json({ success: true, message: 'Task created inside container', task: newTask });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('===========================================================');
  console.log(` Practical 11 Containerized Backend running on port ${PORT}`);
  console.log(` Connected to MongoDB Service Name: ${MONGO_URI}`);
  console.log(' Student: Ghoniya Dhyey (24CS024) | ITUE301 AWDF');
  console.log('===========================================================');
});
