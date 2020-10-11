const usersRepo = require('./user.memory.repository');
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

module.exports = { getAll, get, create, update };
