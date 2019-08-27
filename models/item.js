'use strict';
module.exports = (sequelize, DataTypes) => {
  
  class Item extends sequelize.Sequelize.Model {

  } 
  
  Item.init({
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {sequelize});
  Item.associate = function(models) {
    // associations can be defined here
    Item.hasMany(models.StorageItem)
  };
  return Item;
}; 