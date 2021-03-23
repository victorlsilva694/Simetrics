const Sequelize = require("sequelize");

const connection = new Sequelize('simetrics', 'root', 'Victor123@#!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;