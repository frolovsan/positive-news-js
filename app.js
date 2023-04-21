const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const session = require('express-session'); // Подключаем модуль express-session.
const FileStore = require('session-file-store')(session); // Подключаем модуль session-file-store.

// импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const mainRouter = require('./routes/main.router');
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const regRouter = require('./routes/reg.router');
const feedRouter = require('./routes/feed.router');
const profileRouter = require('./routes/profile.router');
const checkAuth = require('./lib/checkAuth');

// вызов функции проверки соединения с базоый данных
dbCheck();
const sessionConfig = {
  name: 'WhalesCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// роутеры
app.use('/', mainRouter);
app.use('/auth/reg', regRouter);
app.use('/auth/in', loginRouter);
app.use('/auth/out', logoutRouter);
app.use('/feed', checkAuth, feedRouter);
app.use('/profile', profileRouter);
app.use('*', mainRouter);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
