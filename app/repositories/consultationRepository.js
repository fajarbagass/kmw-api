const { Consultation, Client, Indication } = require("../models");

module.exports = {
  create(data) {
    return Consultation.create({
      client_id: data.client_id,
      indication_id: data.indication_id,
      cf_user: data.cf_user,
    });
  },
  update(id, data) {
    return Consultation.update(
      {
        client_id: data.client_id,
        indication_id: data.indication_id,
        cf_user: data.cf_user,
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
          attributes: ["id", "code", "name"],
        },
      ],
      attributes: ["id", "cf_user"],
    });
  },
  find(id) {
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
        {
          model: Indication,
          attributes: ["id", "code", "name"],
        },
      ],
      where: {
        id,
      },
      attributes: ["id", "cf_user"],
    });
  },
};
