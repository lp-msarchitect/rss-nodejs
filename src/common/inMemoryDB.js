const User = require('../resources/users/user.model');

const base = {
  users: []
};

const DB = {
  base,
  getAllUsers() {
    return [...this.base.users];
  },
  getUserById(id) {
    const user = this.base.users.find(el => el.id === id);
    return { ...user };
  },
  createUser(user) {
    this.base.users.push(user);
    const newUser = this.getUserById(user.id);
    return { ...newUser };
  }
};

DB.base.users.push(new User(), new User(), new User());

module.exports = DB;
