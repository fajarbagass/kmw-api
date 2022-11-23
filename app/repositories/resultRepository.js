const {
  Result,
  Fault,
  Consultation,
  Client,
  Indication,
} = require("../models");

module.exports = {
  create(data) {
    return Result.create({
      fault_id: data.fault_id,
      consultation_id: data.consultation_id,
    });
  },
  update(id, data) {
    return Result.update(
      {
        fault_id: data.fault_id,
        consultation_id: data.consultation_id,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  delete(id) {
    return Result.destroy({
      where: {
        id,
      },
    });
  },
  getAll() {
    return Result.findAll({
      include: [
        {
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
        {
          model: Consultation,
          attributes: ["id"],
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
        },
      ],
      attributes: ["id"],
    });
  },
  find(id) {
    return Result.findAll({
      include: [
        {
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
        {
          model: Consultation,
          attributes: ["id"],
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
        },
      ],
      where: {
        id,
      },
      attributes: ["id"],
    });
  },
  findFault(user) {
    return Result.findOne({
      include: [
        {
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
        {
          model: Consultation,
          attributes: [],
          where: {
            client_id: user,
          },
        },
      ],
      attributes: ["id"],
    });
  },
  findUser(user) {
    return Result.findOne({
      include: [
        {
          model: Consultation,
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
          attributes: ["id"],
          where: {
            client_id: user,
          },
        },
      ],
      attributes: ["id"],
    });
  },
  findIndication(user) {
    return Result.findAll({
      include: [
        {
          model: Consultation,
          include: [
            {
              model: Indication,
              attributes: ["id", "code", "name", "mb"],
            },
          ],
          attributes: ["id"],
          where: {
            client_id: user,
          },
        },
      ],
      attributes: ["id"],
    });
  },
};
