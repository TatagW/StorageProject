'use strict';
module.exports = (sequelize, DataTypes) => {
  
  class Item extends sequelize.Sequelize.Model {

  } 
  
  Item.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true, 
          msg: "Please enter your name"
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
    Item.hasOne(models.StorageItem)
  };
  return Item;
}; 