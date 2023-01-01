const resultRepository = require("../repositories/resultRepository");

module.exports = {
  async create(data) {
    try {
      return await resultRepository.create(data);
    } catch (error) {
      throw error;
    }
  },
  async findAll() {
    try {
      return await resultRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async find(data) {
    try {
      const result = await resultRepository.find(data.id);
      if (!result) {
        throw {
          name: "resultNotFound",
          message: "Result is not found",
        };
      }
      return result;
    } catch (error) {
      throw error;
    }
  },
  async update(id, data) {
    try {
      const result = await resultRepository.find(id);
      if (!result) {
        throw {
          name: "resultNotFound",
          message: "Result is not found",
        };
      } else {
        await resultRepository.update(id, data);
      }
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const result = await resultRepository.find(id);
      if (!result) {
        throw {
          name: "resultNotFound",
          message: "Result is not found",
        };
      } else {
        await resultRepository.delete(id);
      }
    } catch (error) {
      throw error;
    }
  },
};
