const DB = require('../../common/inMemoryDB');

const getAll = async () => {
  return DB.getAllUsers();
};

const getById = async id => {
  return DB.getUserById(id);
};

const create = async user => {
  return DB.createUser(user);
};

module.exports = { getAll, getById, create };
