const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const jwtMiddleware = require("../middleware");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh", AuthController.refresh);
router.post("/changePass", jwtMiddleware, AuthController.changePass);
router.get("/getAccessToken", AuthController.getAccessToken);
router.get("/getRefreshToken", AuthController.getRefreshToken);
router.post("/logout", jwtMiddleware, AuthController.logout);

module.exports = router;
