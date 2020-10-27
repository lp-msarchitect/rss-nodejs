const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/tasks.service');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.getById(id);

const create = user => {
  return usersRepo.create(user);
};

const update = (id, user) => {
  return usersRepo.update(id, user);
};

const deleteUser = async id => {
  await tasksService.clearUser(id);
  return usersRepo.deleteUser(id);
};

module.exports = { getAll, get, create, update, deleteUser };
