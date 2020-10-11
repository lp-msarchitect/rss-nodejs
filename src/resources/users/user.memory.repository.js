const DB = require('../../common/inMemoryDB');

const getAll = async () => {
  return DB;
};

module.exports = { getAll };
