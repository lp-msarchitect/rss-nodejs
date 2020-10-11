const User = require('../resources/users/user.model');
const uuid = require('uuid');

const DB = {
  users: [],
  boards: [],
  tasks: []
};

const createItem = (tableName, item) => {
  DB[tableName].push({ ...item, id: uuid() });
};

const getItem = (tableName, id) => {
  return DB[tableName].find(el => el.id === id);
};

const getAllItems = tableName => {
  return DB[tableName];
};

const updateItem = (tableName, item) => {
  const index = DB[tableName].findIndex(el => el.id === item.id);
  DB[tableName][index] = { ...DB[tableName][index], ...item };
  return DB[tableName][index];
};

const deleteItem = (tableName, id) => {
  const index = DB[tableName].findIndex(el => el.id === id);
  const before = DB[tableName].slice(0, index);
  const after = DB[tableName].slice(index + 1);
  DB[tableName] = [...before, ...after];
};

DB.base.users.push(new User(), new User(), new User());

module.exports = { createItem, getItem, getAllItems, updateItem, deleteItem };
