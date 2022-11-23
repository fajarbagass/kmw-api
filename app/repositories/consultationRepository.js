const { Consultation, Client, Indication } = require("../models");

module.exports = {
  create(data) {
    return Consultation.create({
      client_id: data.client_id,
      indication_id: data.indication_id,
    });
  },
  update(id, data) {
    return Consultation.update(
      {
        client_id: data.client_id,
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
          attributes: [
            "id",
            "name",
            "category",
            "car",
            "car_year",
            "number_plat",
          ],
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
          attributes: [
            "id",
            "name",
            "category",
            "car",
            "car_year",
            "number_plat",
          ],
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
          attributes: [
            "id",
            "name",
            "category",
            "car",
            "car_year",
            "number_plat",
          ],
        },
      ],
      where: {
        client_id: user,
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
        client_id: user,
      },
      attributes: [],
    });
  },
};
