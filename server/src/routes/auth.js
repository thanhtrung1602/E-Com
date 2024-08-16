const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh", AuthController.refresh);
router.post("/changePass", AuthController.changePass);
router.get("/getAccessToken", AuthController.getAccessToken);
router.get("/getRefreshToken", AuthController.getRefreshToken);
router.post("/logout", AuthController.logout);

module.exports = router;
