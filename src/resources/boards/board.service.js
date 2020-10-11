const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

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

const deleteBoard = id => {
  return boardsRepo.deleteBoard(id);
};

module.exports = { getAll, get, create, update, deleteBoard };
