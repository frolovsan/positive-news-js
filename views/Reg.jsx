const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <script defer src="/js/reg.js" />
      <div className="form-div">
        <form name="regForm" className="reg-form">
          <h3>Регистрация</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              placeholder="Напишите ваше имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              required
              name="email"
              type="email"
              className="form-control"
              placeholder="Введите e-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              name="password"
              type="password"
              className="form-control"
              placeholder="Придумайте пароль"
            />
          </div>
          <button className="btn">Продолжить</button>
        </form>
      </div>
    </Layout>
  );
};
