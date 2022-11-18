const clientRepository = require("../repositories/clientRepository");

module.exports = {
  async create(data) {
    try {
      return await clientRepository.create(data);
    } catch (error) {
      throw error;
    }
  },
  async find(data) {
    try {
      const client = await clientRepository.find(data.id);
      if (!client) {
        throw {
          name: "clientNotFound",
          message: "Client is not found",
        };
      }
      return client;
    } catch (error) {
      throw error;
    }
  },
  async findAll() {
    try {
      return await clientRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const client = await clientRepository.find(id);
      if (!client) {
        throw {
          name: "clientNotFound",
          message: "Client is not found",
        };
      }
      return clientRepository.delete(id);
    } catch (error) {
      throw error;
    }
  },
};
