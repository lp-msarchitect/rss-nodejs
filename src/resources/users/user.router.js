const { OK, NOT_FOUND, NO_CONTENT } = require('http-status-codes');
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const Joi = require('joi');

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  login: Joi.string().required(),
  password: Joi.string().required()
});

// const userSchema = Joi.object({
//   name: Joi.string(),
//   login: Joi.string(),
//   password: Joi.string(),
//   id: Joi.string().required()
// });

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(OK).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  // map user fields to exclude secret fields like "password"
  if (user) {
    res.status(OK).json(User.toResponse(user));
  } else {
    res.status(NOT_FOUND).send(`User with id ${req.params.id} not found`);
  }
});

router.route('/').post(async (req, res, next) => {
  const { error } = newUserSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  const newUser = await usersService.create({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });
  console.log('newUser', newUser);
  res.status(OK).json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  // TODO Validation user update
  const user = await usersService.update(req.params.id, {
    ...req.body
  });
  res.status(OK).json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  res.status(NO_CONTENT).json(User.toResponse(user));
});

module.exports = router;
