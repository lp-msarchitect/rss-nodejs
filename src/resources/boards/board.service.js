const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');
const taskService = require('../tasks/tasks.service');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.getById(id);

const create = board => {
  return boardsRepo.create(new Board(board));
};

const update = board => {
  return boardsRepo.update({
    ...new Board(board),
    id: board.id
  });
};

const deleteBoard = async id => {
  const tasks = await taskService.getAll(id);
  tasks.forEach(el => {
    taskService.deleteTask(el.id, id);
  });
  return boardsRepo.deleteBoard(id);
};

module.exports = { getAll, get, create, update, deleteBoard };
