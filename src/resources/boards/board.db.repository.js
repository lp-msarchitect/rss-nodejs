const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findById(id);
};

const create = async board => {
  return Board.create(board);
};

const update = async (id, board) => {
  console.log('boardId for update', id);
  console.log('board for update', board);
  return Board.updateOne({ _id: id }, board);
};

const deleteBoard = async id => {
  return (await Board.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAll, getById, create, update, deleteBoard };
