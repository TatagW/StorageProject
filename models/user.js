'use strict';
const hashPassword = require("../helpers/hashPassword")
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {

  }
  
  User.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    password: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        return User.findOne({
          where: {
            name: user.name
          }
        })
        .then(found => {
          if(found) throw new Error("User already exist!")
          
          user.password = hashPassword(user.password)
        })
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Item)
  };
  return User;
};