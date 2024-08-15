const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UserController");
const jwtMiddleware = require("../middleware");

router.get("/getAllUser", jwtMiddleware, UsersController.getUser);

module.exports = router;
