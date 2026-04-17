const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  priority: {
    type: String,
    enum: ['Urgent', 'Daily', 'Important'],
    default: 'Daily'
  },
  recurrence: {
    type: String,
    enum: ['None', 'Daily', 'Weekly', 'Custom'],
    default: 'None'
  },
  dueDate: {
    type: Date
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
