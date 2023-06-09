const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserWord.init(
    {
      userId: DataTypes.INTEGER,
      wordId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserWord',
    },
  );
  return UserWord;
};
