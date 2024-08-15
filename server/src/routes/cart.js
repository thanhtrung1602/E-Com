const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");

router.post("/createCart", CartController.createCart);

router.get("/getAllCart", CartController.getAllCart);

// router.put("/updateQuantity", CartController.updateQuantity);

router.delete("/deleteCartItem", CartController.deleteCartItem);

// router.get("/getCartItemTotal/:userId/:productId", CartController.getCartItemTotal);
module.exports = router;
