'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Actors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    underscored: true,
    modelName: 'Actors',
    tableName: 'actors'
  });
  return Actors;
};