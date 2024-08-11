const { where } = require("sequelize");
const users = require("../models/user");
class UserService {
  async getUser() {
    try {
      const getUser = await users.findAll();
      return getUser;
    } catch (error) {
      throw error;
    }
  }

  async getOneUser() {
    users.findOne({
      where: {
        id: id,
      },
    });
  }

  async createUser() {
    users.findOrCreate({
      where: {
        id: id,
      },
      defaults: {},
    });
  }
}

module.exports = new UserService();
