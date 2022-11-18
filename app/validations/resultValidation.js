const { body } = require("express-validator");

module.exports = {
  resultDataValidate: [
    body("id_consultation", "Consultation is required").exists(),
    body("id_consultation", "Consultation is not valid").isNumeric(),
    body("id_fault", "Fault is required").exists(),
    body("id_fault", "Fault is not valid").isNumeric(),
  ],
};
