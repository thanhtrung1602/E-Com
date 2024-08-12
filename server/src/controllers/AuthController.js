const validator = require("validator");
const AuthService = require("../services/authService");
class AuthController {
  passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
  async login(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email và password không được để trống" });
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email không hợp lệ" });
      }
      if (!this.passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            "Mật khẩu phải có ít nhất 6 ký tự và tối đa 10 ký tự, bao gồm ít nhất một ký tự chữ và một ký tự số",
        });
      }

      const login = await AuthService.login(req.body);
      const { accessToken, refreshToken, user } = login;
      return res.status(200).json(login);
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      return res.status(500).json({ error: "Đã xảy ra lỗi khi đăng nhập" });
    }
  }

  async register(req, res) {
    const { username, password, email, phone, role } = req.body;
    try {
      if (!username || !password || !email || !phone) {
        return res.status(400).json({
          error: "username, password, email, số điện thoại không được để trống",
        });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email không hợp lệ" });
      }

      if (!this.passwordRegex.test(password)) {
        return res.status(400).json({
          error:
            "Mật khẩu phải có ít nhất 6 ký tự và tối đa 10 ký tự, bao gồm ít nhất một ký tự chữ và một ký tự số",
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthController();
