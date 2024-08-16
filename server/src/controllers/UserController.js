const userService = require("../services/userService");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
class UsersController {
  async getUser(req, res) {
    try {
      const getUser = await userService.getUser();
      return res.status(200).json(getUser);
    } catch (error) {
      throw error;
    }
  }

  getMe(req, res) {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Access token not provided" });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    return res.status(200).json(decoded);
  }

  async updateUser(req, res) {
    const id = req.params.id;
    const { phone, email, name, bom, ban } = req.body;
    const phoneRegex = /^\d{10}$/;
    try {
      const NumberId = parseInt(id);
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email không hợp lệ" });
      }

      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          error: "số điện thoại phải có 10 số",
        });
      }

      const updateUser = await userService.updateUser(req.body, NumberId);
      return res.status(200).json(updateUser);
    } catch (error) {
      throw error;
    }
  }

  async delUser(req, res) {
    const id = req.params.id;
    try {
      const NumberId = parseInt(id);
      const delUser = await userService.delUser(NumberId);
      return res.status(200).json(delUser);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UsersController();
