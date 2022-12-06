const { body } = require("express-validator");

module.exports = {
  resultDataValidate: [
    body("md", "MD is required").exists(),
    body("md", "MD is not valid").isFloat(),
    body("client_id", "Client is required").exists(),
    body("client_id", "Client is not valid").isNumeric(),
    body("fault_id", "Fault is required").exists(),
    body("fault_id", "Fault is not valid").isNumeric(),
  ],
};
