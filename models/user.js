'use strict';
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
          
          const crypto = require('crypto');

          const secret = 'abcdefg';
          const hash = crypto.createHmac('sha256', secret)
                            .update(user.password)
                            .digest('hex');
          user.password = hash
        })
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};