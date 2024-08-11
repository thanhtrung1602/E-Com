const userService = require("../services/userService");
class UsersController {
  async getUser(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(500).json("Invalid email or password");
      }
      const getUser = await userService.getUser();
      return res.status(200).json(getUser);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UsersController();
