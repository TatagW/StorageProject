'use strict';
module.exports = (sequelize, DataTypes) => {
  
  class Item extends sequelize.Sequelize.Model {
    static bali(userid){
      const { StorageItem, Storage } = require("../models")
      return Item.findAll({ 
            where: { 
                UserId: userid 
            },
            order: [["name", "ASC"]],
            include: [{
                model: StorageItem,
                include: [
                    {
                      model: Storage,
                      where: {
                    name: "Storage Bali"
                  }
              
                }
            ],
            required: true
        }]
    })
  }

  static semarang(userid){
    const { StorageItem, Storage } = require("../models")
    return Item.findAll({ 
          where: { 
              UserId: userid 
          },
          order: [["name", "ASC"]],
          include: [{
              model: StorageItem,
              include: [
                  {
                      model: Storage,
                      where: {
                        name: "Storage Semarang"
                      }
            
                  }
              ],
              required: true
          }]
      })
    }

    static surabaya(userid){
      const { StorageItem, Storage } = require("../models")
      return Item.findAll({ 
            where: { 
                UserId: userid 
            },
            order: [["name", "ASC"]],
            include: [{
                model: StorageItem,
                include: [
                    {
                        model: Storage,
                        where: {
                          name: "Storage Surabaya"
                        }
              
                    }
                ],
                required: true
            }]
        })
      }

    static balikpapan(userid){
      const { StorageItem, Storage } = require("../models")
      return Item.findAll({ 
            where: { 
                UserId: userid 
            },
            order: [["name", "ASC"]],
            include: [{
                model: StorageItem,
                include: [
                    {
                        model: Storage,
                        where: {
                          name: "Storage Balikpapan"
                        }
              
                    }
                ],
                required: true
            }]
        })
      }
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