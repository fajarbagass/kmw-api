"use strict";
const { Model, IndexHints } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Consultation.belongsTo(models.Client, {
        foreignKey: "id_client",
      });
      Consultation.belongsTo(models.Indication, {
        foreignKey: "id_indication",
      });
    }
  }
  Consultation.init(
    {
      id_client: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Client is required",
          },
        },
      },
      id_indication: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Indication is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Consultation",
    }
  );
  return Consultation;
};
