const DataBase = require('../../common/inMemoryDB');

const getAll = async () => {
  return DataBase.getAllItems('users');
};

const getById = async id => {
  return DataBase.getItem('users', id);
};

const create = async user => {
  return DataBase.createItem('users', user);
};

module.exports = { getAll, getById, create };
