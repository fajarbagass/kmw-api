const resultRepository = require("../repositories/resultRepository");

module.exports = {
  async create(data) {
    try {
      return await resultRepository.create(data);
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
  async findAll() {
    try {
      return await resultRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async find(id) {
    try {
      const result = await resultRepository.find(id);
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
  async findUser(user) {
    try {
      return await resultRepository.findUser(user.id);
    } catch (error) {
      throw error;
    }
  },
  async findFault(user) {
    try {
      return await resultRepository.findFault(user.id);
    } catch (error) {
      throw error;
    }
  },
  async findIndication(user) {
    try {
      return await resultRepository.findIndication(user.id);
    } catch (error) {
      throw error;
    }
  },
};
