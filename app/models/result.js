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
        foreignKey: "id_fault",
      });
      Result.belongsTo(models.Consultation, {
        foreignKey: "id_consultation",
      });
    }
  }
  Result.init(
    {
      id_fault: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Fault is required",
          },
        },
      },
      id_consultation: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Consultation is required",
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
