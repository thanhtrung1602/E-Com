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
        expiresIn: "30s",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "365d",
      });

      await db.RefreshToken.create({
        token: refreshToken,
        userId: user.id,
        expiresIn: "365d",
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

  async refresh(refreshToken) {
    try {
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err) {
            return res.status(401).json({ error: "Invalid refresh token" });
          }
        }
      );
      const tokenRecord = await db.RefreshToken.findOne({
        where: {
          token: refreshToken,
        },
      });

      const id = tokenRecord?.dataValues.userId;

      if (!tokenRecord) {
        return { error: "Invalid refresh token." };
      }

      const expiresIn = tokenRecord?.dataValues.expiresIn;
      if (expiresIn <= new Date()) {
        return { error: "Refresh token has expired." };
      }

      const newPayload = {
        userId: id,
      };
      const newAccessToken = jwt.sign(
        newPayload,
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: expiresIn.toString(),
        }
      );

      return newAccessToken;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();
