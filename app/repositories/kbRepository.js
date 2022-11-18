const { Knowledge_Base, Indication, Fault } = require("../models");

module.exports = {
  create(data) {
    return Knowledge_Base.create({
      id_fault: data.id_fault,
      id_indication: data.id_indication,
    });
  },
  update(id, data) {
    return Knowledge_Base.update(
      {
        id_indication: data.id_indication,
        id_fault: data.id_fault,
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
        id_fault: fault,
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
        id_fault: fault,
      },
      attributes: ["id"],
    });
  },
};
