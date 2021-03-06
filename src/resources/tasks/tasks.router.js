const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');
// const Joi = require('joi');
const Task = require('./tasks.model');

// TODO Вынести схемы валидации в отдельный файл

// const newTaskSchema = Joi.object({
//   title: Joi.string().required(),
//   order: Joi.number().required(),
//   description: Joi.string().required(),
//   userId: Joi.string()
//     .allow(null)
//     .required(),
//   boardId: Joi.string()
//     .allow(null)
//     .required(),
//   columnId: Joi.string().allow(null)
// });

// const putTaskSchema = Joi.object({
//   title: Joi.string(),
//   order: Joi.number(),
//   description: Joi.string(),
//   userId: Joi.string().allow(null),
//   boardId: Joi.string().allow(null),
//   columnId: Joi.string().allow(null)
// });

router.route('/').get(async (req, res) => {
  const boardId = req.params.boardId;
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id, req.params.boardId);
  if (task) {
    res.json(Task.toResponse(task));
  } else {
    res.status(404).send(`Task with id ${req.params.id} not found`);
  }
});

router.route('/').post(async (req, res) => {
  // const { error } = newTaskSchema.validate(req.body);
  // if (error) {
  //   return next(error);
  // }
  const newTask = await tasksService.create({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  });
  res.json(Task.toResponse(newTask));
});

router.route('/:id').put(async (req, res) => {
  // const { error } = putTaskSchema.validate(req.body);
  // if (error) {
  //   return next(error);
  // }

  const task = await tasksService.update(req.params.id, {
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  });
  res.json(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.deleteTask(req.params.id, req.params.boardId);
  res.json(Task.toResponse(task));
});

module.exports = router;
