const { Client } = require("../models");

module.exports = {
  // create client data
  create(data) {
    return Client.create({
      name: data.name,
      category: data.category,
      car: data.car,
      car_year: data.car_year,
      number_plat: data.number_plat,
    });
  },
  // get client by ID
  find(id) {
    return Client.findByPk(id);
  },
  delete(id) {
    return Client.destroy({
      where: {
        id,
      },
    });
  },
};
