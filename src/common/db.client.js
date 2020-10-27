const config = require('./config');
const mongoose = require('mongoose');
const User = require('../resources/users/user.model');

const connectToDB = cb => {
  mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connect!');
    db.dropDatabase();
    User.insertMany([{ name: 'Admin', login: 'admin', password: 'admin' }]);
    cb();
  });
};

module.exports = { connectToDB };
