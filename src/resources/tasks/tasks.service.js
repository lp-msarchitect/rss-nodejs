const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.service');

const getAll = () => tasksRepo.getAll();

const get = id => tasksRepo.getById(id);

const create = task => {
  return tasksRepo.create(new task(task));
};

const update = task => {
  return tasksRepo.update({
    ...new Task(task),
    id: task.id
  });
};

const deleteTask = id => {
  return tasksRepo.deleteTask(id);
};

module.exports = { getAll, get, create, update, deleteTask };
