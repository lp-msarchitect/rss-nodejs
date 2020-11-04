const router = require('express').Router();
const authService = require('./auth.service');

router.route('/').post(async (req, res) => {
  const token = await authService.generateToken(req.body);
  if (token) {
    res.status(200).send({ token });
  } else {
    res.status(403).send('Incorrect login or password');
  }
});

module.exports = router;
