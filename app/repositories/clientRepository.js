const { Client } = require("../models");

module.exports = {
  create(data) {
    return Client.create({
      name: data.name,
      category: data.category,
      car: data.car,
      car_year: data.car_year,
      number_plat: data.number_plat,
    });
  },
  find(id) {
    return Client.findByPk(id);
  },
  getAll() {
    return Client.findAll();
  },
  delete(id) {
    return Client.destroy({
      where: {
        id,
      },
    });
  },
};
