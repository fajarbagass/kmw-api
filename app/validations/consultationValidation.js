const { body } = require("express-validator");

module.exports = {
  consultationDataValidate: [
    body("id_client", "Client is required").exists(),
    body("id_client", "Client is not valid").isNumeric(),
    body("id_indication", "Indication is required").exists(),
    body("id_indication", "Indication is not valid").isNumeric(),
  ],
};
