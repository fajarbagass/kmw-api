"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Knowledge_Base extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Knowledge_Base.belongsTo(models.Indication, {
        foreignKey: "indication_id",
      });
      Knowledge_Base.belongsTo(models.Fault, {
        foreignKey: "fault_id",
      });
    }
  }
  Knowledge_Base.init(
    {
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
      indication_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Indication is required",
          },
          isNumeric: {
            msg: "Indication is not valid",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Knowledge_Base",
    }
  );
  return Knowledge_Base;
};
