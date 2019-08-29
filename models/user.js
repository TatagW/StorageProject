'use strict';
const hashPassword = require("../helpers/hashPassword")
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {

  }
  
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "Please enter your name"}
 
    },
    address: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "Please enter your address"}
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: "Please enter your password"}
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