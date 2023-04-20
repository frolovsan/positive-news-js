const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, userSession }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/css/style.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>
        <Navbar userSession={userSession} />
        <div className="container">{children}</div>
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">© 2023 Supersite, Powered by News API.  Создан с помощью ❤️ самых крутых разработчиков планеты.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
