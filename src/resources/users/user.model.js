const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    login: String,
    password: String
  },
  { versionKey: false, collection: 'users' }
);

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = User;
