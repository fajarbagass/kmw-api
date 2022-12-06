const { body } = require("express-validator");

module.exports = {
  faultDataValidator: [
    body("code", "Code is required").exists(),
    body("name", "Name is required").exists(),
    body("solution", "Solution is required").exists(),
  ],
};
