'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Word, {
        through: models.UserWord,
        foreignKey: 'wordId',
      });
    }
  }
  Word.init({
    goodWord: DataTypes.STRING,
    badWord: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};