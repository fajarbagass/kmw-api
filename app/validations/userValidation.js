const { body } = require("express-validator");
const adminRepository = require("../repositories/adminRepository");

module.exports = {
    loginDataValidate: [
        body("username", "Username is required").exists(), 
        body("password", "Password is required").exists(),
    ],
    updateDataValidate: [
        body("name", "Name is required").exists(),
        body("username", "Username is required").exists(),
    ],
    changePasswordDataValidate: [
        body("new_password", "Password is required").exists(),
        body("new_password", "Password must contain at least 6 characters long").isLength({
            min: 6,
        }),
        body("confirm_password", "Password is required").exists(),
    ],
};