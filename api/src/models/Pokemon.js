const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { timestamps: false });
};