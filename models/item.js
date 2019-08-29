'use strict';
module.exports = (sequelize, DataTypes) => {
  
  class Item extends sequelize.Sequelize.Model {

  } 
  
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: {
          msg: "Please enter Item's name"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {sequelize});
  Item.associate = function(models) {
    // associations can be defined here
    Item.hasMany(models.StorageItem)
  };
  return Item;
}; 