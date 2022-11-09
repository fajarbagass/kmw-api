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
        foreignKey: "id_indication",
      });
      Knowledge_Base.belongsTo(models.Fault, {
        foreignKey: "id_fault",
      });
    }
  }
  Knowledge_Base.init(
    {
      id_indication: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "indication is required",
          },
          isNumeric: {
            msg: "indication is not valid",
          },
        },
      },
      id_fault: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "fault is required",
          },
          isNumeric: {
            msg: "fault is not valid",
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
