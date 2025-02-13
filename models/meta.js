const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Meta = sequelize.define('Meta', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Meta;
