const { Sequelize } = require('sequelize');

const dotenv = require("dotenv")
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432,
      logging: false,
    }
  );

module.exports = sequelize;