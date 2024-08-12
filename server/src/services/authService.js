const db = require("../models");
const dotenv = require("dotenv");
dotenv.config();
const { compare, hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthService {
  async login(body) {
    try {
      const user = await db.User.findOne({
        where: {
          email: body.email,
        },
      });
      if (!user) {
        return { error: "Không tìm thấy tài khoản" };
      }

      const verify = await compare(body.password, user.password);
      if (!verify) {
        return { error: "mật khẩu không đúng" };
      }
      const { password, email, phone, ...other } = user;

      const payload = {
        userId: user.id,
      };
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "365d",
      });

      const millisecondsInDay = 24 * 60 * 60 * 1000;
      const millisecondsIn365Days = 365 * millisecondsInDay;
      const expiresIn = new Date(Date.now() + millisecondsIn365Days);

      await db.RefreshToken.create({
        token: refreshToken,
        userId: user.id,
        expiresIn: expiresIn,
      });

      return { accessToken, refreshToken, user };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();
