const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.service');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = (id, boardId) => tasksRepo.getById(id, boardId);

const create = task => {
  return tasksRepo.create(new task(task));
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

module.exports = { getAll, get, create, update, deleteTask };
