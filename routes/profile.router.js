const router = require('express').Router();
const Profile = require('../views/Profile');
const render = require('../lib/render');

const { User, Word, UserWord } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const userWordAll = await Word.findAll({
      include: [
        {
          model: User,
          where: { id: req.session.userId },
          through: {
            model: UserWord,
          },
        },
      ],
    });

    const userWordArr = await userWordAll.map((item) =>
      item.get({ plain: true })
    );

    render(Profile, { userWordArr }, res, req);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
