const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');
const Joi = require('joi');

const newTaskSchema = Joi.object({
  title: Joi.string().required(),
  order: Joi.string().required(),
  description: Joi.string().required(),
  userId: Joi.string().required(),
  boardId: Joi.string().required(),
  columnId: Joi.string().required()
});

const putTaskSchema = Joi.object({
  title: Joi.string(),
  order: Joi.string(),
  description: Joi.string(),
  userId: Joi.string(),
  boardId: Joi.string(),
  columnId: Joi.string(),
  id: Joi.string().required()
});

router.route('/').get(async (req, res) => {
  const boardId = req.params.boardId;
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id, req.params.boardId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send(`Task with id ${req.params.id} not found`);
  }
});

router.route('/').post(async (req, res, next) => {
  const { error } = newTaskSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const newTask = await tasksService.create({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  });
  res.json(newTask);
});

router.route('/:id').put(async (req, res, next) => {
  const { error } = putTaskSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const task = await tasksService.update({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId,
    id: req.params.id
  });
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.deleteTask(req.params.id, req.params.boardId);
  res.json(task);
});

module.exports = router;
