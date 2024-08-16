const validator = require("validator");
const AuthService = require("../services/authService");
class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
    try {
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email và password không được để trống" });
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email không hợp lệ" });
      }
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            "Mật khẩu phải có ít nhất 6 ký tự và tối đa 10 ký tự, bao gồm ít nhất một ký tự chữ và một ký tự số",
        });
      }

      const login = await AuthService.login(req.body);
      const { accessToken, refreshToken, users } = login;

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json(login);
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      return res.status(500).json({ error: "Đã xảy ra lỗi khi đăng nhập" });
    }
  }

  async register(req, res) {
    const { name, password, email, phone, role } = req.body;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
    const phoneRegex = /^\d{10}$/;
    console.log("Password:", password); // In giá trị của password
    console.log("Password matches regex:", passwordRegex.test(password));
    try {
      if (!name || !password || !email || !phone) {
        return res.status(400).json({
          error: "name, password, email, số điện thoại không được để trống",
        });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email không hợp lệ" });
      }

      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            "Mật khẩu phải có ít nhất 6 ký tự và tối đa 10 ký tự, bao gồm ít nhất một ký tự chữ và một ký tự số",
        });
      }

      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          error: "số điện thoại phải có 10 số",
        });
      }
      const register = await AuthService.register(req.body);
      return res.status(200).json(register);
    } catch (error) {
      throw error;
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.body;
      const newAccessToken = await AuthService.refresh(refreshToken);
      const millisecondsInDay = 24 * 60 * 60 * 1000;
      const millisecondsIn365Days = 365 * millisecondsInDay;

      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: millisecondsIn365Days,
      });

      res.clearCookie("refreshToken");

      return res.status(200).json(newAccessToken);
    } catch (error) {
      throw error;
    }
  }

  getAccessToken(req, res) {
    const { accessToken } = req.cookies;

    console.log("accessToken >>>>>>>>>>>>>>>>>>", accessToken);

    if (!accessToken) {
      return res.status(404).json("not found token!");
    }

    return res.status(200).json(accessToken);
  }

  getRefreshToken(req, res) {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(404).json("not found token!");
    }

    return res.status(200).json(refreshToken);
  }

  logout(req, res) {
    try {
      res.clearCookie("refreshToken", { httpOnly: true, secure: true });
      res.clearCookie("accessToken", { httpOnly: true, secure: true });

      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Logout failed", error: error.message });
    }
  }

  async changePass(req, res) {
    const { email, password } = req.body;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
    try {
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email không hợp lệ" });
      }

      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            "Mật khẩu phải có ít nhất 6 ký tự và tối đa 10 ký tự, bao gồm ít nhất một ký tự chữ và một ký tự số",
        });
      }

      const change = await AuthService.changePass(req.body);
      return res.status(200).json(change);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthController();
