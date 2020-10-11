const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const uuid = require('uuid');

const DB = {
  users: [],
  boards: [],
  tasks: []
};
const getItem = (tableName, id) => {
  return DB[tableName].find(el => el.id === id);
};

const getAllItems = tableName => {
  return DB[tableName];
};

const createItem = (tableName, item) => {
  const itemData = { ...item, id: uuid() };
  DB[tableName].push(itemData);
  return getItem(tableName, itemData.id);
};

const updateItem = (tableName, item) => {
  const index = DB[tableName].findIndex(el => el.id === item.id);
  DB[tableName][index] = { ...DB[tableName][index], ...item };
  return DB[tableName][index];
};

const deleteItem = (tableName, id) => {
  const index = DB[tableName].findIndex(el => el.id === id);
  const deletedItem = { ...DB[tableName][index] };
  const before = DB[tableName].slice(0, index);
  const after = DB[tableName].slice(index + 1);
  DB[tableName] = [...before, ...after];
  return deletedItem;
};

createItem('users', new User());
createItem('boards', new Board());

module.exports = { createItem, getItem, getAllItems, updateItem, deleteItem };
