const faultRepository = require("../repositories/faultRepository");

module.exports = {
  async create(data) {
    try {
      return await faultRepository.create(data);
    } catch (error) {
      throw error;
    }
  },
  async findAll() {
    try {
      return await faultRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async findByid(id) {
    try {
      const fault = await faultRepository.find(id);
      if (!fault) {
        throw {
          name: "faultNotFound",
          message: "Fault is not found",
        };
      }
      return fault;
    } catch (error) {
      throw error;
    }
  },
  async update(id, data) {
    try {
      const faultData = await faultRepository.find(id);
      if (!faultData) {
        throw {
          name: "faultNotFound",
          message: "Fault is not Found",
        };
      } else {
        await faultRepository.update(id, data);
      }
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const faultData = await faultRepository.find(id);
      if (!faultData) {
        throw {
          name: "faultNotFound",
          message: "Fault is not Found",
        };
      } else {
        await faultRepository.delete(id);
      }
    } catch (error) {
      throw error;
    }
  },
};
