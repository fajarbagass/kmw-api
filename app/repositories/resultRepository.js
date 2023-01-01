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
      md: data.md,
      client_id: data.client_id,
      fault_id: data.fault_id,
    });
  },
  update(id, data) {
    return Result.update(
      {
        md: data.md,
        client_id: data.client_id,
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
          model: Fault,
          attributes: ["id", "code", "name", "solution"],
        },
      ],
      attributes: ["id", "md"],
    });
  },
  find(id) {
    return Result.findOne({
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
          model: Fault,
          attributes: ["id", "code", "name", "md", "solution"],
        },
      ],
      where: {
        id,
      },
      attributes: ["id", "md"],
    });
  },
};
