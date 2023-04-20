const React = require('react');
const Layout = require('./Layout');

module.exports = function UserLogin() {
  return (
    <Layout>
      <script defer src="/js/log.js" />
      <div className="form-div">
        <form name="logForm" className="login-form">
          <h3>Вход</h3>
          <label htmlFor="email">E-mail: </label>
          <input
            name="email"
            required
            className="form-control"
            type="email"
            placeholder="Введите e-mail"
          />
          <label htmlFor="password">Пароль: </label>
          <input
            name="password"
            required
            className="form-control"
            type="password"
            placeholder="Введите пароль"
          />
          <button type="submit" className="log-btn">
            Войти
          </button>
        </form>
      </div>
    </Layout>
  );
};
