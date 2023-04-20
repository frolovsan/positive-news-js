const React = require('react');
const Layout = require('./Layout');

module.exports = function Visit({ title, userSession }) {
  return (
    <Layout title={title} userSession={userSession}>
      <script defer src="" />
      <div className="visit-page">
        <h2 className="text-center">Добро пожаловать в мир позитива </h2>
        <h3 className="text-center">
          Приветствуем вас с теплом и радостью на нашей странице с хорошими
          новостями!
        </h3>
        <p className="text-center">
          Где мы собираем и делимся вдохновляющими и радостными новостями. Здесь
          вы найдете множество улыбочек, историй о добрых поступках,
          достижениях, восхитительных событиях и успешных проектах, которые
          происходят вокруг нас.
        </p>
        <p className="text-center">
          Мы верим, что хорошие новости имеют важное значение для нашего
          настроения, эмоционального благополучия и мировосприятия. Они
          напоминают нам о том, что в мире есть много добра и надежды, и
          вдохновляют нас действовать позитивно.
        </p>
        <hr />
        <div className="auth-check">
          <p>
            <a href="/auth/in">Войти</a>
            <p>или</p>
            <a href="/auth/reg">Зарегистрироваться</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};
