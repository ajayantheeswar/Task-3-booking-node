const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

module.exports = sequelize.define('seat',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    seatno : Sequelize.INTEGER,
    
})