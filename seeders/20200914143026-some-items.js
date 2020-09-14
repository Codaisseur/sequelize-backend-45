"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "laundry",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "water the plants",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "do some sport",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
