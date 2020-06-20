const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const Trip = sequelize.define('trip',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    busno : {
        type : Sequelize.STRING
    },
    date: Sequelize.STRING,
    origin: Sequelize.STRING,
    destination: Sequelize.STRING,
    timing : Sequelize.STRING,
    SeatAvailable : Sequelize.INTEGER,
    fare : Sequelize.DOUBLE
});



module.exports = Trip;