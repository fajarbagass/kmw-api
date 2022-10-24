'use strict';
const bcryptjs = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Admins", [
        {
          name: "Admin KMW",
          username: "Admin",
          password: bcryptjs.hashSync("AdminKMW", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Admins", null, {});
  }
};
