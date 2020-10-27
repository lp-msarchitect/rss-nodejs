const Task = require('./tasks.model');

const getAll = async boardId => {
  return Task.find({ boardId });
};

const getById = async (id, boardId) => {
  const task = await Task.findOne({ _id: id, boardId });
  return task;
};

const create = async task => {
  return Task.create(task);
};

const update = async (id, task) => {
  return Task.updateOne({ _id: id }, task);
};

const deleteTask = async (id, boardId) => {
  return Task.deleteOne({ _id: id, boardId });
};

const deleteTasksOnBoard = async boardId => {
  return (await Task.deleteMany({ boardId })).deletedCount;
};

const clearUser = async id => {
  return Task.updateMany({ userId: id }, { userId: null });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteTask,
  clearUser,
  deleteTasksOnBoard
};
