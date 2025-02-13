const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, 
  },
  favorito: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, 
  },
  fixada: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, 
  },
});

module.exports = Task;
