const router = require('express').Router();
const Sequelize = require('sequelize');
const Feed = require('../views/Feed');
const render = require('../lib/render');

const { User, Word, UserWord } = require('../db/models');

router.get('/', async (req, res) => {
  const PopularWords = await Word.findAll({
    raw: true,
    attributes: [
      'goodWord',
      'badWord',
      [Sequelize.fn('COUNT', Sequelize.col('goodWord')), 'count'],
    ],
    group: ['goodWord', 'badWord'],
    order: [[Sequelize.fn('COUNT', Sequelize.col('goodWord')), 'DESC']],
    limit: 10,
  });
  console.log(PopularWords);

  render(Feed, {}, res, req);
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
    render(Feed, { newsArr }, res, req);
  } catch (error) {
    console.log(error);
    res.status(500).send('Ошибка в получении новостей');
  }
});

module.exports = router;
