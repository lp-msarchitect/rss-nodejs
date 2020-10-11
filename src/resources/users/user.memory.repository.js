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

const update = async user => {
  return DataBase.updateItem('users', user);
};

const deleteUser = async id => {
  return DataBase.deleteItem('users', id);
};

module.exports = { getAll, getById, create, update, deleteUser };
