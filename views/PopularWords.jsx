const React = require('react');

module.exports = function PopularWords({ newRes }) {
  return (
    <ol className="popular" name="popularWords" id="popularWords">
      <h3>Популярные запросы</h3>
      {newRes?.map((word) => (
        <li className="ol_list" key={word.id}>
          {`${word.goodWord}-${word.badWord}`}
          <span>{`${word.Users.length}`}</span>
        </li>
      ))}
    </ol>
  );
};
