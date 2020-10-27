const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const tasksRouter = require('./resources/tasks/tasks.router');
const logger = require('./logger/logger');
const Joi = require('joi');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(logger.logRequest);

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', tasksRouter);

app.use((err, req, res, next) => {
  if (Joi.isError(err)) {
    res.status(400).send(err.message);
    console.log(err);
    return;
  }
  next(err);
});

app.use((err, req, res) => {
  res.status(500).send('Internal server error');
  console.log(err);
});

process.on('uncaughtExceptionMonitor', error => {
  console.log(`captured error: ${error.message}`);
});

// process.on('unhandledRejection', reason => {
//   console.log(`Unhandled rejection detected: ${reason.message}`);
// });

module.exports = app;
