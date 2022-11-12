const { Indication } = require("../models");

module.exports = {
  create(data) {
    return Indication.create({
      name: data.name,
      mb: data.mb,
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
        name: data.name,
        mb: data.mb,
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
