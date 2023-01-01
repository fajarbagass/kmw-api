const kbRepository = require("../repositories/kbRepository");

module.exports = {
  async create(data) {
    try {
      return await kbRepository.create(data);
    } catch (error) {
      throw error;
    }
  },
  async findAll() {
    try {
      return await kbRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async find(data) {
    try {
      const kb = await kbRepository.find(data.id);
      if (!kb) {
        throw {
          name: "kbNotFound",
          message: "Knowledge Base is not found",
        };
      }
      return kb;
    } catch (error) {
      throw error;
    }
  },
  async update(id, data) {
    try {
      const kb = await kbRepository.find(id);
      if (!kb) {
        throw {
          name: "kbNotFound",
          message: "Knowledge Base is not found",
        };
      } else {
        await kbRepository.update(id, data);
      }
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const kb = await kbRepository.find(id);
      if (!kb) {
        throw {
          name: "kbNotFound",
          message: "Knowledge Base is not found",
        };
      } else {
        await kbRepository.delete(id);
      }
    } catch (error) {
      throw error;
    }
  },
};
