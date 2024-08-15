const userService = require("../services/userService");
class UsersController {
  async getUser(req, res) {
    try {
      const getUser = await userService.getUser();
      return res.status(200).json(getUser);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UsersController();
