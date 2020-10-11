const User = require('../resources/users/user.model');

const base = {
  users: []
};

const DB = {
  base,
  getAllUsers() {
    return this.base.users;
  },
  getUserById(id) {
    return this.base.users.find(user => user.id === id);
  },
  createUser(user) {
    this.base.users.push(user);
    return this.getUserById(user.id);
  }
};

DB.base.users.push(new User(), new User(), new User());

module.exports = DB;
