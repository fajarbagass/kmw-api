const { Knowledge_Base, Indication, Fault } = require("../models");

module.exports = {
  create(data) {
    return Knowledge_Base.create({
      mb: data.mb,
      fault_id: data.fault_id,
      indication_id: data.indication_id,
    });
  },
  update(id, data) {
    return Knowledge_Base.update(
      {
        mb: data.mb,
        fault_id: data.fault_id,
        indication_id: data.indication_id,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  delete(id) {
    return Knowledge_Base.destroy({
      where: {
        id,
      },
    });
  },
  getAll() {
    return Knowledge_Base.findAll({
      include: [
        {
          model: Fault,
          attributes: ["id", "code", "name", "solution"],
        },
        {
          model: Indication,
          attributes: ["id", "code", "name"],
        },
      ],
      attributes: ["id", "mb"],
    });
  },
  find(id) {
    return Knowledge_Base.findOne({
      include: [
        {
          model: Fault,
          attributes: ["id", "code", "name", "solution"],
        },
        {
          model: Indication,
          attributes: ["id", "code", "name"],
        },
      ],
      where: {
        id,
      },
      attributes: ["id", "mb"],
    });
  },
};
