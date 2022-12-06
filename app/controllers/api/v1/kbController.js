const kbServices = require("../../../services/kbService");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const kb = await kbServices.create(data);
      res.status(201).json({
        status: "success",
        data: kb,
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
      const kb = await kbServices.findAll();
      res.status(200).json({
        status: "success",
        data: kb,
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
      const kb = await kbServices.find(id);
      res.status(200).json({
        status: "success",
        data: kb,
      });
    } catch (error) {
      if (error.name === "kbNotFound") {
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
      await kbServices.update(id, data);
      res.status(200).json({
        status: "success",
        message: "Knowledge Base updated sucessfully",
      });
    } catch (error) {
      if (error.name === "kbNotFound") {
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
      await kbServices.delete(id);
      res.status(200).json({
        status: "success",
        message: "Knowledge Base deleted sucessfully",
      });
    } catch (error) {
      if (error.name === "kbNotFound") {
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
