const { Fault } = require("../models");

module.exports = {
  //    create fault data
  create(data) {
    return Fault.create({
      code: data.code,
      name: data.name,
      solution: data.solution,
      md: data.md,
    });
  },
  //    get all fault data
  getAll() {
    return Fault.findAll();
  },
  //    get by id fault data
  find(id) {
    return Fault.findByPk(id);
  },
  //    update fault data
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
  //   delete fault data
  delete(id) {
    return Fault.destroy({
      where: {
        id,
      },
    });
  },
};
