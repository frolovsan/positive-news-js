const React = require('react');
const Layout = require('./Layout');
const PopularWords = require('./PopularWords');

function Feed({ title, userSession, newsArr }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="" />
      <div>
        <h2>{title}</h2>
      </div>
      <div id="feed">
        <form action="/feed" method="POST" className="newsForm">
          <input type="text" name="goodWord" placeholder="Фильтруем" required />
          <input type="text" name="badWord" placeholder="Исключаем" required />
          <button type="submit">Искать!</button>
        </form>
        <PopularWords />
        {newsArr ? (
          <div className="news-container">
            {newsArr.map((el) => (
              <div className="oneNew">
                {el.urlToImage ? (
                  <div id="newsImg">
                    <img src={`${el.urlToImage}`} alt="newsImg" />
                  </div>
                ) : (
                  <div id="newsImg">
                    <img src="https://media.istockphoto.com/id/520294182/photo/good-news.jpg?s=612x612&w=0&k=20&c=3FqloSYuw0mGBg91v6WrLk0zIX-7HgFmjyjfEWbCYbU=" alt="newsImg" />
                  </div>
                )}
                <p id="title">{el.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}

module.exports = Feed;
