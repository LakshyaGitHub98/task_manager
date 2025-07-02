// models/Task.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  dueDate: Date,
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
//   labels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Label' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);