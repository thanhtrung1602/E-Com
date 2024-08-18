const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");

router.post("/createCart", CartController.createCart);

router.get("/getAllCartByUserId/:id", CartController.getAllCartByUserId);

router.delete("/deleteCart/:id", CartController.deleteCart);

module.exports = router;
