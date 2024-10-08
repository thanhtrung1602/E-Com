const db = require("../models/index");
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
      const { password, email, phone, ...users } = user.dataValues;
      const payload = {
        userId: user.id,
      };
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15s",
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

  async logout(id) {
    try {
      const userId = id.userId;

      const logout = await db.RefreshToken.destroy({
        where: {
          userId: userId,
        },
      });

      if (logout) {
        return { message: "Logout successful" };
      }
    } catch (error) {
      throw error;
    }
  }

  async refresh(refreshToken) {
    try {
      if (!refreshToken) {
        return { error: "Refresh token is required" };
      }

      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      if (!decoded) {
        return { error: "Invalid refresh token" };
      }

      const tokenRecord = await db.RefreshToken.findOne({
        where: { token: refreshToken },
      });

      if (!tokenRecord) {
        return { error: "Refresh token not found" };
      }

      const expiresIn = tokenRecord.dataValues.expiresIn;
      if (new Date(expiresIn) <= new Date()) {
        return { error: "Refresh token has expired" };
      }

      const newPayload = {
        userId: tokenRecord.dataValues.userId,
      };
      const newAccessToken = jwt.sign(
        newPayload,
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: expiresIn,
        }
      );

      return newAccessToken;
    } catch (error) {
      console.error("Error during token refresh:", error);
      return { error: "Internal server error" };
    }
  }

  async changePass({ email, password }) {
    const saltRounds = 10;
    const hashPassword = await hash(password, saltRounds);
    try {
      const checkUser = await db.User.findOne({
        where: {
          email: email,
        },
      });

      if (!checkUser) {
        return {
          error:
            "Không tìm thấy người dùng với email này. Vui lòng nhập email khác",
        };
      }

      const changePass = await db.User.update(
        {
          password: hashPassword,
        },
        {
          where: {
            email,
          },
        }
      );

      if (changePass) {
        return { message: "Đổi mật khẩu thành công" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();
