const express = require("express");
const router = express.Router();
const OrderDetailController = require("../controllers/OrderDetailController");

router.post("/createOrderDetail", OrderDetailController.createOrderDetail);

router.get("/getAllOrderDetails", OrderDetailController.getAllOrderDetails);

// thiếu getAllOrderDetailByOrderId/:id

router.delete(
  "/deleteOrderDetail/:id",
  OrderDetailController.deleteOrderDetail
);

// router.get("/getOrderDetailsByOrderId/:orderId", OrderDetailController.getOrderDetailsByOrderId);

module.exports = router;
