// models/habito.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Habito = sequelize.define('Habito', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,  
  },
  fixado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,  
  },
}, {
  timestamps: true, 
});

module.exports = Habito;
