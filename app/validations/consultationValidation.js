const { body } = require("express-validator");

module.exports = {
  consultationDataValidate: [
    body("client_id", "Client is required").exists(),
    body("client_id", "Client is not valid").isNumeric(),
    body("indication_id", "Indication is required").exists(),
    body("indication_id", "Indication is not valid").isNumeric(),
    body("cf_user", "CF user is required").exists(),
    body("cf_user", "CF user is not valid").isFloat(),
  ],
};
