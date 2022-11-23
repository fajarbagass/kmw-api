const { body } = require("express-validator");

module.exports = {
  kbDataValidate: [
    body("indication_id", "Indication is required").exists(),
    body("indication_id", "Indication is not valid").isNumeric(),
    body("fault_id", "Fault is required").exists(),
    body("fault_id", "Fault is not valid").isNumeric(),
  ],
};
