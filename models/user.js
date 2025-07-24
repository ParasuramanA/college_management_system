const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")


const users = sequelize.define('users', 
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'teacher', 'student', 'parent'),
      defaultValue: 'student',
    },
  }, 
  {
    timestamps: true,
  }
);
  

module.exports = users