"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fault extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fault.hasMany(models.Knowledge_Base, {
        foreignKey: "fault_id",
      });
      Fault.hasMany(models.Result, {
        foreignKey: "fault_id",
      });
    }
  }
  Fault.init(
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
      solution: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            msg: "Solution is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Fault",
    }
  );
  return Fault;
};
