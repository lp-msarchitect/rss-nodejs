const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/tasks.service');
const bcrypt = require('bcrypt');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.getById(id);

const create = async user => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  return usersRepo.create({ ...user, password: passwordHash });
};

const update = (id, user) => {
  return usersRepo.update(id, user);
};

const deleteUser = async id => {
  await tasksService.clearUser(id);
  return usersRepo.deleteUser(id);
};

module.exports = { getAll, get, create, update, deleteUser };
