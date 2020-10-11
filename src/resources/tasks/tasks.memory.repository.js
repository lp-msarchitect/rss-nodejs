const DataBase = require('../../common/inMemoryDB');

const getAll = async () => {
  return DataBase.getAllItems('tasks');
};

const getById = async id => {
  return DataBase.getItem('tasks', id);
};

const create = async task => {
  return DataBase.createItem('tasks', task);
};

const update = async task => {
  return DataBase.updateItem('tasks', task);
};

const deleteTask = async id => {
  return DataBase.deleteItem('tasks', id);
};

module.exports = { getAll, getById, create, update, deleteTask };
