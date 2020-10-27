const config = require('./config');
const mongoose = require('mongoose');
const User = require('../resources/users/user.model');
const bcrypt = require('bcrypt');

const connectToDB = cb => {
  mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log('Connect!');
    db.dropDatabase();
    const hashAdminPassword = await bcrypt.hash('admin', 10);
    User.insertMany([
      { name: 'Admin', login: 'admin', password: hashAdminPassword }
    ]);
    cb();
  });
};

module.exports = { connectToDB };
