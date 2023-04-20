const express = require('express');

const router = express.Router();

const render = require('../lib/render');
const Main = require('../views/Main');

router.get('/', (req, res) => {
  render(Main, { title: 'Welcome to Express - ReactSSR' }, res, req);
});

module.exports = router;
