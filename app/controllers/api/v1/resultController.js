const resultServices = require("../../../services/resultService");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const result = await resultServices.create(data);
      res.status(201).json({
        status: "success",
        data: result,
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
  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      await resultServices.update(id, data);
      res.status(200).json({
        status: "success",
        message: "Result updated sucessfully",
      });
    } catch (error) {
      if (error.name === "resultNotFound") {
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
      await resultServices.delete(id);
      res.status(200).json({
        status: "success",
        message: "Result deleted sucessfully",
      });
    } catch (error) {
      if (error.name === "resultNotFound") {
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
      const result = await resultServices.findAll();
      res.status(200).json({
        status: "success",
        data: result,
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
      const result = await resultServices.find(id);
      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      if (error.name === "resultNotFound") {
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
  async findResult(req, res) {
    try {
      const id = req.params;
      const fault = await resultServices.findFault(id);
      const user = await resultServices.findUser(id);
      const indication = await resultServices.findIndication(id);
      res.status(200).json({
        status: "success",
        fault,
        user,
        indication,
      });
    } catch (error) {
      if (error.name === "resultNotFound") {
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
