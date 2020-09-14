"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          phone: 2341231,
          email: "matias@codaisseur.com",
          password: "abc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matias",
          phone: 2341231,
          email: "matias1@codaisseur.com",
          password: "abc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matias",
          phone: 2341231,
          email: "matias2@codaisseur.com",
          password: "abc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
