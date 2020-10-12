const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');

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

router.route('/').post(async (req, res) => {
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

router.route('/:id').put(async (req, res) => {
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
