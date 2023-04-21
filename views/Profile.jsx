const React = require('react');
const Layout = require('./Layout');

function Profile({ userSession, userWordArr }) {
  return (
    <Layout userSession={userSession}>
      <div className="profile-container">
        <span className="user-name">{`Слова пользователя ${userSession}:`}</span>
        <ul>
          {userWordArr.map((el, i) => (
            <li key={i}>
              {`✔️ ${el.goodWord}  /  ❌ ${el.badWord}`}
              <button className="delete" id={el.id}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
      <script defer src="/js/prof.js" />
    </Layout>
  );
}

module.exports = Profile;
