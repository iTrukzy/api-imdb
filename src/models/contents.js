'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contents.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    total_seasons: DataTypes.INTEGER,
    imdb_score: DataTypes.NUMERIC,
    release_date: DataTypes.STRING,
    play_time: DataTypes.INTEGER,
    imdb_link: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    underscored: true,
    modelName: 'Contents',
    tableName: 'contents'
  });
  return Contents;
};