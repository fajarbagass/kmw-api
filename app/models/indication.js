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
      Indication.hasMany(models.Knowledge_Base, {
        foreignKey: "indication_id",
      });
      Indication.hasMany(models.Consultation, {
        foreignKey: "indication_id",
      });
    }
  }
  Indication.init(
    {
      code: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Code is required",
          },
        },
      },
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
            msg: "MB is required",
          },
          isFloat: {
            msg: "MB is not valid",
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
