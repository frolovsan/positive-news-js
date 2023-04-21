const router = require('express').Router();
const Sequelize = require('sequelize');
const Feed = require('../views/Feed');
const render = require('../lib/render');

const { User, Word, UserWord } = require('../db/models');

router.get('/', async (req, res) => {
  const oneInc = await Word.findAll({
    include: [
      {
        model: User,
        through: {
          model: UserWord,
        },
      },
    ],
  });

  const resMap = oneInc.map((item) => item.get({ plain: true }));
  const newRes = resMap.sort((a, b) => b.Users.length - a.Users.length).slice(0, 5);
  render(Feed, { newRes }, res, req);
});

router.post('/', async (req, res) => {
  try {
    const { goodWord, badWord } = req.body;

    const newWord = await Word.findOrCreate({
      where: { goodWord, badWord },
    });

    const findWord = await Word.findOne({
      where: { goodWord, badWord },
    });

    const word = await findWord.get({ plain: true });

    const userWord = await UserWord.findOrCreate({
      where: { userId: req.session.userId, wordId: word.id },
    });

    if (userWord[1] && newWord[1]) {
      console.log('Связка слов успешно добавлена!');
    } else {
      console.log('Связка слов не добавлена :(');
    }

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${goodWord}&apiKey=49b8b20864994002b0e9fe100ffcb7ad`,
    );
    const result = await response.json();

    const resArr = result.articles;

    const newsArr = resArr.filter(
      (el) => !el.title.includes(badWord) && !el.description.includes(badWord),
    );

    const oneInc = await Word.findAll({
      include: [
        {
          model: User,
          through: {
            model: UserWord,
          },
        },
      ],
    });

    const resMap = oneInc.map((item) => item.get({ plain: true }));
    const newRes = resMap.sort((a, b) => b.Users.length - a.Users.length).slice(0, 5);

    render(Feed, { newsArr, newRes }, res, req);
  } catch (error) {
    console.log(error);
    res.status(500).send('Ошибка в получении новостей');
  }
});

module.exports = router;
