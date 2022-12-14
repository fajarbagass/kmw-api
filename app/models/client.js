"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.hasMany(models.Consultation, {
        foreignKey: "client_id",
      });
      Client.hasMany(models.Result, {
        foreignKey: "client_id",
      });
    }
  }
  Client.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Category is required",
          },
        },
      },
      car: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Car is required",
          },
        },
      },
      car_year: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Car Year is required",
          },
          isNumeric: {
            msg: "Car Year is not valid",
          },
        },
      },
      number_plat: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Number Plat is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
