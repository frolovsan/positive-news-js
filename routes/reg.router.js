const router = require('express').Router();
const bcrypt = require('bcrypt');
const Reg = require('../views/Reg');
const render = require('../lib/render');

const { User } = require('../db/models');

router.get('/', (req, res) => {
  render(Reg, {}, res, req);
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    const user = await User.findOrCreate({
      where: { email },
      defaults: { name, password: hashPass },
    });
    if (user[1]) {
      const newUser = await User.findOne({ where: { email } });
      if (newUser) {
        req.session.user = newUser.name;
        req.session.userId = newUser.id;
      }
      res.json({ msg: 'Пользователь зарегистрирован' });
    } else {
      req.session.user = user.name;
      req.session.userId = user.id;
      res.json({ msg: 'Пользователь уже существует' });
    }
  } catch (error) {
    console.log('Ошибка при создании пользователя', error);
  }
});

module.exports = router;
