const config = require('./config');
const mongoose = require('mongoose');

const connectToDB = cb => {
  mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Çonnect!');
    cb();
  });
};

module.exports = { connectToDB };
