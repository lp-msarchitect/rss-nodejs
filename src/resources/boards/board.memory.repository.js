const DataBase = require('../../common/inMemoryDB');

const getAll = async () => {
  return DataBase.getAllItems('boards');
};

const getById = async id => {
  return DataBase.getItem('boards', id);
};

const create = async board => {
  return DataBase.createItem('boards', board);
};

const update = async board => {
  return DataBase.updateItem('boards', board);
};

const deleteBoard = async id => {
  return DataBase.deleteItem('boards', id);
};

module.exports = { getAll, getById, create, update, deleteBoard };
