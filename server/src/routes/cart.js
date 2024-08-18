const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");

router.post("/createCart", CartController.createCart);

router.get("/getAllCartByUserId/:id", CartController.getAllCartByUserId);

// router.put("/updateQuantity", CartController.updateQuantity);

router.delete("/deleteCart/:id", CartController.deleteCart);

// router.get("/getCartItemTotal/:userId/:productId", CartController.getCartItemTotal);
module.exports = router;
