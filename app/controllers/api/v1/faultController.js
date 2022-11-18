const faultServices = require("../../../services/faultService");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const fault = await faultServices.create(data);
      res.status(200).json({
        status: "success",
        data: fault,
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
      const fault = await faultServices.findAll();
      res.status(200).json({
        status: "success",
        data: fault,
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
      const fault = await faultServices.findByid(id);
      res.status(200).json({
        status: "success",
        data: fault,
      });
    } catch (error) {
      if (error.name === "faultNotFound") {
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
      await faultServices.update(id, data);
      res.status(200).json({
        status: "success",
        message: "Fault updated successfully",
      });
    } catch (error) {
      if (error.name === "faultNotFound") {
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
      await faultServices.delete(id);
      res.status(200).json({
        status: "success",
        message: "Fault deleted successfully",
      });
    } catch (error) {
      if (error.name === "faultNotFound") {
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
