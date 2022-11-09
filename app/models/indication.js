"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Indication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Indication.hasMany(models.Consultation, {
        foreignKey: "id_indication",
      });
      Indication.hasMany(models.Knowledge_Base, {
        foreignKey: "id_indication",
      });
    }
  }
  Indication.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      mb: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: {
            msg: "mb is required",
          },
          isFloat: {
            msg: "mb is not valid",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Indication",
    }
  );
  return Indication;
};