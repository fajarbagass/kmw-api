const { body } = require("express-validator");

module.exports = {
  indicationDataValidator: [
    body("code", "Code is required").exists(),
    body("name", "Name is required").exists(),
  ],
};
