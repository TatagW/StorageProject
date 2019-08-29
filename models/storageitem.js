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
  }, {
    sequelize,
    hooks: {
      beforeCreate: (storageItem) => {
        const { Storage } = require("../models")
        return Storage.findOne({
          where:{
            id: storageItem.StorageId
          }
        })
        .then(storage => {
          if(storage.capacity < 1)throw new Error("Storage capacity is not enough")
          let left = storage.capacity - 1
          return Storage.update({
            capacity: left
          },
          where: {
            id: storageItem.StorageId
          })
        })
      }
    }
  });
  StorageItem.associate = function(models) {
    // associations can be defined here
    StorageItem.belongsTo(models.Storage)
    StorageItem.belongsTo(models.Item)
  };
  return StorageItem;
};