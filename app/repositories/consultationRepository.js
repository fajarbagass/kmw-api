const { Consultation, Client, Indication } = require("../models");

module.exports = {
  create(data) {
    return Consultation.create({
      id_client: data.id_client,
      id_indication: data.id_indication,
    });
  },
  update(id, data) {
    return Consultation.update(
      {
        id_client: data.id_client,
        id_indication: data.id_indication,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  delete(id) {
    return Consultation.destroy({
      where: {
        id,
      },
    });
  },
  getAll() {
    return Consultation.findAll({
      include: [
        {
          model: Client,
          attributes: ["id", "name"],
        },
        {
          model: Indication,
          attributes: ["id", "code", "name", "mb"],
        },
      ],
      attributes: ["id"],
    });
  },
  find(id) {
    return Consultation.findAll({
      include: [
        {
          model: Client,
          attributes: ["id", "name"],
        },
        {
          model: Indication,
          attributes: ["id", "code", "name", "mb"],
        },
      ],
      where: {
        id,
      },
      attributes: ["id"],
    });
  },
  findClient(user) {
    return Consultation.findOne({
      include: [
        {
          model: Client,
          attributes: ["id", "name"],
        },
      ],
      where: {
        id_client: user,
      },
      attributes: [],
    });
  },
  findIndication(user) {
    return Consultation.findAll({
      include: [
        {
          model: Indication,
          attributes: ["id", "code", "name", "mb"],
        },
      ],
      where: {
        id_client: user,
      },
      attributes: [],
    });
  },
};
