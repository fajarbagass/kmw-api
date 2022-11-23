const { Knowledge_Base, Indication, Fault } = require("../models");

module.exports = {
  create(data) {
    return Knowledge_Base.create({
      fault_id: data.fault_id,
      indication_id: data.indication_id,
    });
  },
  update(id, data) {
    return Knowledge_Base.update(
      {
        indication_id: data.indication_id,
        fault_id: data.fault_id,
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
          model: Indication,
          attributes: ["id", "code", "name", "mb"],
        },
        {
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
      ],
      attributes: ["id"],
    });
  },
  find(id) {
    return Knowledge_Base.findAll({
      include: [
        {
          model: Indication,
          attributes: ["id", "code", "name", "mb"],
        },
        {
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
      ],
      where: {
        id,
      },
      attributes: ["id"],
    });
  },
  findFault(fault) {
    return Knowledge_Base.findOne({
      include: [
        {
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
      ],
      where: {
        fault_id: fault,
      },
      attributes: [],
    });
  },
  findIndication(fault) {
    return Knowledge_Base.findAll({
      include: [
        {
          model: Indication,
          attributes: ["id", "code", "name", "mb"],
        },
      ],
      where: {
        fault_id: fault,
      },
      attributes: ["id"],
    });
  },
};
