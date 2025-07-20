const sequelize = require('../config/db');
const users = require('./user');

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL');
    await sequelize.sync(); // Use { force: true } to drop & recreate
  } catch (err) {
    console.error('❌ DB Connection Error:', err);
  }
};

module.exports = { connectDB ,users};
