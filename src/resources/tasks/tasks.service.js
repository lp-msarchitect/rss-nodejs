const tasksRepo = require('./tasks.db.repository');
const Task = require('./tasks.model');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = (id, boardId) => tasksRepo.getById(id, boardId);

const create = task => {
  return tasksRepo.create(new Task(task));
};

const update = task => {
  return tasksRepo.update({
    ...new Task(task),
    id: task.id
  });
};

const deleteTask = (id, boardId) => {
  return tasksRepo.deleteTask(id, boardId);
};

const deleteTasks = boardId => {
  return tasksRepo.deleteTasks(boardId);
};

const clearUser = id => {
  tasksRepo.clearUser(id);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  deleteTask,
  clearUser,
  deleteTasks
};
