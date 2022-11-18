const { body } = require("express-validator");

module.exports = {
  kbDataValidate: [
    body("id_indication", "Indication is required").exists(),
    body("id_indication", "Indication is not valid").isNumeric(),
    body("id_fault", "Fault is required").exists(),
    body("id_fault", "Fault is not valid").isNumeric(),
  ],
};
