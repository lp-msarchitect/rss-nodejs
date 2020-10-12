const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/tasks.service');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.getById(id);

const create = user => {
  return usersRepo.create(new User(user));
};

const update = user => {
  return usersRepo.update({
    ...new User(user),
    id: user.id
  });
};

const deleteUser = async id => {
  await tasksService.clearUser(id);
  return usersRepo.deleteUser(id);
};

module.exports = { getAll, get, create, update, deleteUser };
