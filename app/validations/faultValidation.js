const { body } = require("express-validator");

module.exports = {
  createFaultDataValidator: [
    body("name", "Name is required").exists(),
    body("solution", "Solution is required").exists(),
    body("md", "MD is required").exists(),
    body("md", "MD is not valid").isFloat(),
  ],
};
