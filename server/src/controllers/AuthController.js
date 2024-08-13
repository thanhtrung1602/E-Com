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
      console.log(login);
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json(users);
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
}

module.exports = new AuthController();
