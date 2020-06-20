const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const Ticket = sequelize.define('ticket',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Seats :Sequelize.INTEGER
});

module.exports = Ticket;