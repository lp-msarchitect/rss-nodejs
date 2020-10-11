const DB = require('../../common/inMemoryDB');

const getAll = async () => {
  return DB.getAllUsers();
};

const getById = async id => {
  return DB.getUserById(id);
};

module.exports = { getAll, getById };
