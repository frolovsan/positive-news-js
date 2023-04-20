const express = require('express'); 
const app = express(); 
require('@babel/register');
const morgan = require('morgan'); 
const path = require('path');
require('dotenv').config(); 

//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');

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

//роутеры
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
