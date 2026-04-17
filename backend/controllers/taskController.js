const Task = require('../models/Task');
const { createClient } = require('redis');

// Assuming redisClient is globally accessible or we re-initialize it here. 
// A better pattern is to export the redisClient from server.js or a separate db/redis.js file.
// For now, let's use the local ENV config but with graceful degradation.
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', () => {}); // Handle silently in controller
redisClient.connect().catch(() => {}); // Connect non-blocking

// Helper function to check if Redis is ready
const isRedisReady = () => redisClient.isOpen || redisClient.isReady;

// @desc    Get all tasks for a user
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
  try {
    const cacheKey = `tasks_${req.user.id}`;
    
    // 1. Check Redis Cache
    if (isRedisReady()) {
      const cachedTasks = await redisClient.get(cacheKey);
      if (cachedTasks) {
        return res.status(200).json(JSON.parse(cachedTasks));
      }
    }

    // 2. Fetch from MongoDB if not cached
    const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });

    // 3. Save to Redis Cache (Expire in 1 hour)
    if (isRedisReady()) {
      await redisClient.setEx(cacheKey, 3600, JSON.stringify(tasks));
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error retrieving tasks', error: error.message });
  }
};

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
  try {
    const { title, description, priority, recurrence, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Please add a task title' });
    }

    const task = await Task.create({
      userId: req.user.id,
      title,
      description,
      priority,
      recurrence,
      dueDate
    });

    // Invalidate Cache
    if (isRedisReady()) {
      await redisClient.del(`tasks_${req.user.id}`);
    }

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error creating task', error: error.message });
  }
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Ensure the logged-in user matches the task's user
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized to update this task' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the updated document
    );

    // Invalidate Cache
    if (isRedisReady()) {
      await redisClient.del(`tasks_${req.user.id}`);
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Server error updating task', error: error.message });
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Ensure the logged-in user matches the task's user
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized to delete this task' });
    }

    await task.deleteOne();

    // Invalidate Cache
    if (isRedisReady()) {
      await redisClient.del(`tasks_${req.user.id}`);
    }

    res.status(200).json({ id: req.params.id, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error deleting task', error: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
