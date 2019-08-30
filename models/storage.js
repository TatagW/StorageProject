'use strict';
module.exports = (sequelize, DataTypes) => {
  class Storage extends sequelize.Sequelize.Model {

    capacityBox(){
      if(this.capacity > 1)return `${this.capacity} Boxes left`
      else return `${this.capacity} Box left`
    }

  }
  
  Storage.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: (storage) => {
        return Storage.findOne({
          where: {
            name: storage.name
          }
        })
        .then(found => {
          if(found) throw new Error("Storage already exist!")
        })
      }
    }
  });
  Storage.associate = function(models) {
    // associations can be defined here
    Storage.hasMany(models.StorageItem)
  };
  return Storage;
};