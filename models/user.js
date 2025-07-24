const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")


const users = sequelize.define(
  'users',
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'firstname', // explicitly mapped
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'lastname',
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
    role: {
      type: DataTypes.ENUM('admin', 'teacher', 'student', 'parent'),
      defaultValue: 'student',
      field: 'role',
    },
  },
  {
    timestamps: true,
    tableName: 'users', 
    createdAt: 'created_at',  
    updatedAt: 'updated_at',
  }
);


module.exports = users