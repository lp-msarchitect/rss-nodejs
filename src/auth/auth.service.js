const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = require('../common/config');
const userService = require('../resources/users/user.service');

const generateToken = async ({ login, password }) => {
  let token = null;
  const user = await userService.getByLogin(login);
  if (!user) {
    return null;
  }
  const isUserCorrect = await bcrypt.compare(password, user.password);
  if (isUserCorrect) {
    token = await jwt.sign({ login, userId: user.id }, JWT_SECRET_KEY, {
      expiresIn: '1h'
    });
  }
  return token;
};
module.exports = { generateToken };
