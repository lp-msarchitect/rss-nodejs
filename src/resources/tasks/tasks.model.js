const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, default: 'TASK' },
    order: Number,
    description: String,
    userId: mongoose.Schema.Types.ObjectId,
    boardId: mongoose.Schema.Types.ObjectId,
    columnId: mongoose.Schema.Types.ObjectId
  },
  { versionKey: false, collection: 'tasks' }
);

taskSchema.statics.toResponse = task => {
  const { id, title, order, description, userId, boardId, columnId } = task;
  return { id, title, order, description, userId, boardId, columnId };
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
