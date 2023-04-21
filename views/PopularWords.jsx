const React = require('react');

module.exports = function PopularWords({ popularWords }) {
  return (
    <select name="popularWords" id="popularWords">
      {popularWords.map((word) => (
        <option key={word.id} value={word}>
          {word}
        </option>
      ))}
    </select>
  );
};
