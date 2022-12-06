"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Result.belongsTo(models.Fault, {
        foreignKey: "fault_id",
      });
      Result.belongsTo(models.Client, {
        foreignKey: "client_id",
      });
    }
  }
  Result.init(
    {
      md: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: {
            msg: "MD is required",
          },
          isFloat: {
            msg: "MD is not valid",
          },
        },
      },
      client_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Client is required",
          },
          isNumeric: {
            msg: "Client is not valid",
          },
        },
      },
      fault_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Fault is required",
          },
          isNumeric: {
            msg: "Fault is not valid",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Result",
    }
  );
  return Result;
};
