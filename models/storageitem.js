'use strict';
module.exports = (sequelize, DataTypes) => {
  class StorageItem extends sequelize.Sequelize.Model {

  }
  
  StorageItem.init({
    StorageId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {sequelize});
  StorageItem.associate = function(models) {
    // associations can be defined here
    StorageItem.belongsTo(models.Storage)
    StorageItem.belongsTo(models.Item)
  };
  return StorageItem;
};