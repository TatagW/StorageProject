'use strict';
module.exports = (sequelize, DataTypes) => {
  class Storage extends sequelize.Sequelize.Model {

  }
  
  Storage.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {sequelize});
  Storage.associate = function(models) {
    // associations can be defined here
  };
  return Storage;
};