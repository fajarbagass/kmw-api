const clientServices = require("../../../services/clientService");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const client = await clientServices.create(data);
      res.status(201).json({
        status: "success",
        data: client,
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
  async find(req, res) {
    try {
      const id = req.params;
      const client = await clientServices.find(id);
      res.status(200).json({
        status: "success",
        data: client,
      });
    } catch (error) {
      if (error.name === "clientNotFound") {
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
  async getAll(req, res) {
    try {
      const client = await clientServices.findAll();
      res.status(200).json({
        status: "success",
        data: client,
      });
    } catch (error) {
      res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      await clientServices.delete(id);
      res.status(200).json({
        status: "success",
        message: "Client deleted successfully",
      });
    } catch (error) {
      if (error.name === "clientNotFound") {
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
