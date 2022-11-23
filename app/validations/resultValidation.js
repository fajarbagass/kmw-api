const { body } = require("express-validator");

module.exports = {
  resultDataValidate: [
    body("consultation_id", "Consultation is required").exists(),
    body("consultation_id", "Consultation is not valid").isNumeric(),
    body("fault_id", "Fault is required").exists(),
    body("fault_id", "Fault is not valid").isNumeric(),
  ],
};
