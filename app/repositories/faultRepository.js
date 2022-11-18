const { Fault } = require("../models");

module.exports = {
  create(data) {
    return Fault.create({
      code: data.code,
      name: data.name,
      solution: data.solution,
      md: data.md,
    });
  },
  getAll() {
    return Fault.findAll();
  },
  find(id) {
    return Fault.findByPk(id);
  },
  update(id, data) {
    return Fault.update(
      {
        code: data.code,
        name: data.name,
        solution: data.solution,
        md: data.md,
      },
      {
        where: {
          id,
        },
      }
    );
  },
  delete(id) {
    return Fault.destroy({
      where: {
        id,
      },
    });
  },
};
