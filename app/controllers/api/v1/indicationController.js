const indicationServices = require("../../../services/indicationService");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const indication = await indicationServices.create(data);
      res.status(201).json({
        status: "success",
        data: indication,
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
      const indication = await indicationServices.findAll();
      res.status(200).json({
        status: "success",
        data: indication,
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
      const id = req.params.id;
      const indication = await indicationServices.findByid(id);
      res.status(200).json({
        status: "success",
        data: indication,
      });
    } catch (error) {
      if (error.name === "indicationNotFound") {
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
      await indicationServices.update(id, data);
      res.status(200).json({
        status: "success",
        message: "Indication updated successfully",
      });
    } catch (error) {
      if (error.name === "indicationNotFound") {
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
      await indicationServices.delete(id);
      res.status(200).json({
        status: "success",
        message: "Indication deleted successfully",
      });
    } catch (error) {
      if (error.name === "indicationNotFound") {
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
