const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <nav className="navbar">
      {userSession ? (
        <ul className="navbar-list">
          <div id="left-nav">
            <li className="navbar-item">
              <a href="/feed" className="navbar-link">
                Новости
              </a>
            </li>
          </div>
          <div id="center-nav">
            <li className="navbar-item">
              <a className="navbar-link" href="/feed">
                <span className="logo">
                  <img id="first" src="/images/rainbow.svg" alt="rainbow" />
                  Positive News
                  <img id="second" src="/images/rainbow.svg" alt="rainbow" />
                </span>
              </a>
            </li>
          </div>
          <div id="right-nav">
            <li className="navbar-item">
              <a href="/auth/out" className="navbar-link">
                Выйти
              </a>
            </li>
            <li className="navbar-item">
              <a href="/profile" className="navbar-link">
                {userSession}
              </a>
            </li>
          </div>
        </ul>
      ) : (
        <ul className="navbar-list-out">
          <div id="center-nav">
            <li className="navbar-item">
              <a className="navbar-link" href="/">
                <span className="logo">
                  <img id="first" src="/images/rainbow.svg" alt="rainbow" />
                  Positive News
                  <img id="second" src="/images/rainbow.svg" alt="rainbow" />
                </span>
              </a>
            </li>
          </div>
        </ul>
      )}
    </nav>
  );
};
