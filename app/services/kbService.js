const { check } = require("express-validator");
const kbRepository = require("../repositories/kbRepository");

module.exports = {
  async create(data) {
    try {
      return await kbRepository.create(data);
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
  async findAll() {
    try {
      return await kbRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async find(id) {
    try {
      const kb = await kbRepository.find(id);
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
  async findByFault(fault) {
    try {
      return await kbRepository.findFault(fault.id);
    } catch (error) {
      throw error;
    }
  },
  async findByIndication(fault) {
    try {
      return await kbRepository.findIndication(fault.id);
    } catch (error) {
      throw error;
    }
  },
};
