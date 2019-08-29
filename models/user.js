'use strict';
const hashPassword = require("../helpers/hashPassword")
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {

  }
  
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true, 
          msg: "Please enter your name"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true, 
          msg: "Please enter your name"
        }
      }
    },
    password: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true, 
          msg: "Please enter your name"
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        if(user.name !== ''){
          return User.findOne({
            where: {
              name: user.name
            }
          })
          .then(found => {
            console.log(found)
            if(found) throw new Error("User already exist!")
            
            user.password = hashPassword(user.password)
          })
        }
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Item)
  };
  return User;
};