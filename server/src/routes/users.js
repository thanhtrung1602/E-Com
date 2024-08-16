const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UserController");
const jwtMiddleware = require("../middleware");

router.get("/getAllUser", jwtMiddleware, UsersController.getUser);
router.get("/getMe", jwtMiddleware, UsersController.getMe);
router.patch("/updateUser/:id", jwtMiddleware, UsersController.updateUser);
router.delete("/delUser/:id", UsersController.delUser);

module.exports = router;
