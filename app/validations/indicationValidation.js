const { body } = require("express-validator");

module.exports = {
  indicationDataValidator: [
    body("code", "Code is required").exists(),
    body("name", "Name is required").exists(),
    body("mb", "MB is required").exists(),
    body("mb", "MB is not valid").isFloat(),
  ],
};
