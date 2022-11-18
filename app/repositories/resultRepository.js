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
      id_fault: data.id_fault,
      id_consultation: data.id_consultation,
    });
  },
  update(id, data) {
    return Result.update(
      {
        id_fault: data.id_fault,
        id_consultation: data.id_consultation,
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
              attributes: ["id", "name"],
            },
            {
              model: Indication,
              attributes: ["id", "code", "name"],
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
              attributes: ["id", "name", "mb"],
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
            id_client: user,
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
            id_client: user,
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
              attributes: ["id", "code", "name"],
            },
          ],
          attributes: ["id"],
          where: {
            id_client: user,
          },
        },
      ],
      attributes: ["id"],
    });
  },
};
