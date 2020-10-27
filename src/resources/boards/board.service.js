const boardsRepo = require('./board.db.repository');
const Board = require('./board.model');
const tasksService = require('../tasks/tasks.service');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.getById(id);

const create = board => {
  return boardsRepo.create(new Board(board));
};

const update = (id, board) => {
  return boardsRepo.update(id, board);
};

const deleteBoard = async id => {
  tasksService.deleteTasks(id);
  return boardsRepo.deleteBoard(id);
};

module.exports = { getAll, get, create, update, deleteBoard };
