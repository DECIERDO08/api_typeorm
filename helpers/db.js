const config = require('config.json');
const mysql = require('mysqlZ/promise');
const { Sequelize } = require('sequelize');

module.export = db = {};

initialize();

async funtion initialize() {
    //create db if it doesn't already exsit
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, part, user, password });
    const connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //connect to db
    const sequelize = new Squelize(database, user, password, { dialect: 'mysql'});

    //init models and add them to the exported db object
    db.User = require('../users/user.model')(Sequelize);

    //sync all models with database
    await sequelize.syn({ alter: true});
}