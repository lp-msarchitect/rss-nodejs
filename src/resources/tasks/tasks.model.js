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
  { versionKey: false }
);

taskSchema.statics.toResponse = task => {
  return { ...task, id: task.id };
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
