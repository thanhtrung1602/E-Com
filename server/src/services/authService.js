const db = require("../models/index");
const dotenv = require("dotenv");
dotenv.config();
const { compare, hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
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
      const { password, email, phone, ...users } = user.dataValues;
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
      const expiresIn = new Date(Date.now() + millisecondsIn365Days).toString();

      await db.RefreshToken.create({
        token: refreshToken,
        userId: user.id,
        expiresIn: expiresIn,
      });

      return { accessToken, refreshToken, users };
    } catch (error) {
      throw error;
    }
  }

  async register({ name, password, email, phone, role }) {
    const saltRounds = 10;
    const hashPassword = await hash(password, saltRounds);
    try {
      const [register, created] = await db.User.findOrCreate({
        where: {
          email,
          phone,
        },
        defaults: {
          name,
          password: hashPassword,
          role,
        },
      });

      if (!created) {
        return { error: "email hoặc số điện thoại này đã được tạo" };
      }

      return register;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();
