const router = require('express').Router();
const boardsService = require('./board.service');
// const Joi = require('joi');
const Board = require('./board.model');

// TODO Вынести схемы валидации в отдельный файл
// const newBoardSchema = Joi.object({
//   title: Joi.string().required(),
//   columns: Joi.array().required()
// });

// const putBoardSchema = Joi.object({
//   title: Joi.string(),
//   columns: Joi.array()
// });

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.json(Board.toResponse(board));
  } else {
    res.status(404).send(`Board with id ${req.params.id} not found`);
  }
});

router.route('/').post(async (req, res) => {
  // const { error } = newBoardSchema.validate(req.body);
  // if (error) {
  //   return next(error);
  // }
  const newBoard = await boardsService.create({
    title: req.body.title,
    columns: req.body.columns
  });
  res.json(Board.toResponse(newBoard));
});

router.route('/:id').put(async (req, res) => {
  // const { error } = putBoardSchema.validate(req.body);
  // if (error) {
  //   return next(error);
  // }
  const board = await boardsService.update(req.params.id, {
    title: req.body.title,
    columns: req.body.columns
  });
  console.log('updated board', board);
  res.json(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  res.json(Board.toResponse(board));
});

module.exports = router;
