'use strict';
module.exports = (sequelize, DataTypes) => {
  class StorageItem extends sequelize.Sequelize.Model {

  }
  
  StorageItem.init({
    StorageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {sequelize});
  StorageItem.associate = function(models) {
    // associations can be defined here
    StorageItem.belongsTo(models.Storage)
    StorageItem.belongsTo(models.Item)
  };
  return StorageItem;
};