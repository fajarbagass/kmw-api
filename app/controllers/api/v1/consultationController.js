const consultationServices = require("../../../services/consultationService");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const consultation = await consultationServices.create(data);
      res.status(201).json({
        status: "success",
        data: consultation,
      });
    } catch (error) {
      if (
        error.name === "badRequest" ||
        error.name === "SequelizeValidationError"
      ) {
        res.status(400).json({
          name: error.name,
          message: error.message,
        });
      } else {
        res.status(500).json({
          name: error.name,
          message: error.message,
        });
      }
    }
  },
  async getAll(req, res) {
    try {
      const consultation = await consultationServices.findAll();
      res.status(200).json({
        status: "success",
        data: consultation,
      });
    } catch (error) {
      res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  async find(req, res) {
    try {
      const id = req.params;
      const consultation = await consultationServices.find(id);
      res.status(200).json({
        status: "success",
        data: consultation,
      });
    } catch (error) {
      if (error.name === "consultationNotFound") {
        res.status(404).json({
          name: error.name,
          message: error.message,
        });
      } else {
        res.status(500).json({
          name: error.name,
          message: error.message,
        });
      }
    }
  },
  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      await consultationServices.update(id, data);
      res.status(200).json({
        status: "success",
        message: "Consultation updated sucessfully",
      });
    } catch (error) {
      if (error.name === "consultationNotFound") {
        res.status(404).json({
          name: error.name,
          message: error.message,
        });
      } else if (
        error.name === "badRequest" ||
        error.name === "SequelizeValidationError"
      ) {
        res.status(400).json({
          name: error.name,
          message: error.message,
        });
      } else {
        res.status(500).json({
          name: error.name,
          message: error.message,
        });
      }
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      await consultationServices.delete(id);
      res.status(200).json({
        status: "success",
        message: "Consultation deleted sucessfully",
      });
    } catch (error) {
      if (error.name === "consultationNotFound") {
        res.status(404).json({
          name: error.name,
          message: error.message,
        });
      } else {
        res.status(500).json({
          name: error.name,
          message: error.message,
        });
      }
    }
  },
};
