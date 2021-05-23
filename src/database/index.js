const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Result = require('../models/Result');

const connection = new Sequelize(dbConfig);

User.init(connection);
Result.init(connection);

User.associate(connection.models);
Result.associate(connection.models);

module.exports = connection;