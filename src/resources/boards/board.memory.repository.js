const DataBase = require('../../common/inMemoryDB');

const getAll = async () => {
  return DataBase.getAllItems('boards');
};

const getById = async id => {
  return DataBase.getItem('boards', id);
};

const create = async user => {
  return DataBase.createItem('boards', user);
};

const update = async user => {
  return DataBase.updateItem('boards', user);
};

const deleteBoard = async id => {
  return DataBase.deleteItem('boards', id);
};

module.exports = { getAll, getById, create, update, deleteBoard };
