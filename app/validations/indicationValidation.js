const { body } = require("express-validator");

module.exports = {
  createIndicationDataValidator: [
    body("name", "Name is required").exists(),
    body("mb", "MB is required").exists(),
    body("mb", "MB is not valid").isFloat(),
  ],
};
