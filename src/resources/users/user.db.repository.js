const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findById(id);
};

const create = async user => {
  return User.create(user);
};

const update = async (id, user) => {
  return User.updateOne({ _id: id }, user);
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAll, getById, create, update, deleteUser };
