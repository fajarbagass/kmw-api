const indicationRepository = require("../repositories/indicationRepository");

module.exports = {
  async create(data) {
    try {
      return await indicationRepository.create(data);
    } catch (error) {
      throw error;
    }
  },
  async findAll() {
    try {
      return await indicationRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async findByid(id) {
    try {
      const indication = await indicationRepository.find(id);
      if (!indication) {
        throw {
          name: "indicationNotFound",
          message: "indication is not found",
        };
      }
      return indication;
    } catch (error) {
      throw error;
    }
  },
  async update(id, data) {
    try {
      const indicationData = await indicationRepository.find(id);
      if (!indicationData) {
        throw {
          name: "indicationNotFound",
          message: "Indication is not Found",
        };
      } else {
        await indicationRepository.update(id, data);
      }
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const indicationData = await indicationRepository.find(id);
      if (!indicationData) {
        throw {
          name: "indicationNotFound",
          message: "Indication is not Found",
        };
      } else {
        await indicationRepository.delete(id);
      }
    } catch (error) {
      throw error;
    }
  },
};
