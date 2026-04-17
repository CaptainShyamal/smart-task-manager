require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createClient } = require('redis');
require('./config/passport'); // Initialize Google OAuth strategy

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Redis Client Setup
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to Redis Cache'));

// MongoDB Setup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-task-manager';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error. Please check your .env file:', err.message));

// Basic Health Check Endpoint
app.get('/health', async (req, res) => {
  try {
    await redisClient.ping();
    res.status(200).json({ status: 'OK', message: 'Backend and Redis are functioning' });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', message: 'Redis connection failed' });
  }
});

// API Routes scaffolding as per SRS
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/reminders', (req, res) => res.json({ message: 'Reminder APIs' }));
app.use('/api/payment', (req, res) => res.json({ message: 'Payment API (upgrade)' }));

// Start Server
async function startServer() {
  try {
    await redisClient.connect();
  } catch (err) {
    console.warn('Redis connection failed (Continuing without cache). Ensure your REDIS_URL in .env is correct.');
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
