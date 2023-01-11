const Sequelize = require('sequelize');


const sequelize = new Sequelize('booking', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports=sequelize