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
        foreignKey: "id_fault",
      });
    }
  }
  Fault.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      solution: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Solution is required",
          },
        },
      },
      md: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: {
            msg: "md is required",
          },
          isFloat: {
            msg: "md is not valid",
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
