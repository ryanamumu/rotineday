const { DataTypes } = require('sequelize');
const db = require('../database');

const ListaCompras = db.define('ListaCompras', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comprado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = ListaCompras;