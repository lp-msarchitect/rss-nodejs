const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.json(board);
  } else {
    res.status(404).send(`Board with id ${req.params.id} not found`);
  }
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardsService.create({
    title: req.body.title,
    columns: req.body.columns
  });
  res.json(newBoard);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update({
    title: req.body.title,
    columns: req.body.columns,
    id: req.params.id
  });
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  res.json(board);
});

module.exports = router;
