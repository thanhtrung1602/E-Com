const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");

router.post("/createCart", CartController.createCart);

module.exports = router;
