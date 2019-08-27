'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {

  }
  
  User.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {sequelize});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};