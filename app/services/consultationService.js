const consultationRepository = require("../repositories/consultationRepository");

module.exports = {
  async create(data) {
    try {
      return await consultationRepository.create(data);
    } catch (error) {
      throw error;
    }
  },
  async update(id, data) {
    try {
      const consultation = await consultationRepository.find(id);
      if (!consultation) {
        throw {
          name: "consultationNotFound",
          message: "Consultation is not found",
        };
      } else {
        await consultationRepository.update(id, data);
      }
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      const consultation = await consultationRepository.find(id);
      if (!consultation) {
        throw {
          name: "consultationNotFound",
          message: "Consultation is not found",
        };
      } else {
        await consultationRepository.delete(id);
      }
    } catch (error) {
      throw error;
    }
  },
  async findAll() {
    try {
      return await consultationRepository.getAll();
    } catch (error) {
      throw error;
    }
  },
  async find(id) {
    try {
      const consultation = await consultationRepository.find(id);
      if (!consultation) {
        throw {
          name: "consultationNotFound",
          message: "Consultation is not found",
        };
      }
      return consultation;
    } catch (error) {
      throw error;
    }
  },
  async findClient(user) {
    try {
      return await consultationRepository.findClient(user.id);
    } catch (error) {
      throw error;
    }
  },
  async findIndication(user) {
    try {
      return await consultationRepository.findIndication(user.id);
    } catch (error) {
      throw error;
    }
  },
};
