const DataBase = require('../../common/inMemoryDB');

const getAll = async boardId => {
  return DataBase.getAllItems('tasks', boardId);
};

const getById = async (id, boardId) => {
  return DataBase.getItem('tasks', id, boardId);
};

const create = async task => {
  return DataBase.createItem('tasks', task);
};

const update = async task => {
  return DataBase.updateItem('tasks', task);
};

const deleteTask = async (id, boardId) => {
  return DataBase.deleteItem('tasks', id, boardId);
};

const clearUser = async id => {
  DataBase.clearFiled('tasks', 'userId', id);
};

module.exports = { getAll, getById, create, update, deleteTask, clearUser };
