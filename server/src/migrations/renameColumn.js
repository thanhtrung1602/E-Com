module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("users", "username", "name");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("users", "name", "username");
  },
};
