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
      Result.belongsTo(models.Consultation, {
        foreignKey: "consultation_id",
      });
    }
  }
  Result.init(
    {
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
      consultation_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Consultation is required",
          },
          isNumeric: {
            msg: "Consultation is not valid",
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
