const { Indication } = require("../models");

module.exports = {
  create(data) {
    return Indication.create({
      code: data.code,
      name: data.name,
    });
  },
  getAll() {
    return Indication.findAll();
  },
  find(id) {
    return Indication.findByPk(id);
  },
  update(id, data) {
    return Indication.update(
      {
        code: data.code,
        name: data.name,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  delete(id) {
    return Indication.destroy({
      where: {
        id,
      },
    });
  },
};
