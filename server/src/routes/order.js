const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post("/createOrder", OrderController.createOrder);

router.get("/getAllOrder", OrderController.getAllOrder);

router.get("/getOrderById/:id", OrderController.getOrderById);

// thiếu getOrderUserById/:id

router.put("/updateOrder/:id", OrderController.updateOrder);

router.delete("/deleteOrder/:id", OrderController.deleteOrder);

module.exports = router;
