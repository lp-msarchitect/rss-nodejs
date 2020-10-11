const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  // map user fields to exclude secret fields like "password"
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.create({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });
  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
    id: req.params.id
  });
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  res.json(User.toResponse(user));
});

module.exports = router;
