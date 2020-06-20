const Sequelize = require('sequelize');

const sequelize = new Sequelize('redbus', 'admin', 'Abinaya@060899', {
  dialect: 'mysql',
  host: 'localhost',
  port:3308
});

module.exports = sequelize;
