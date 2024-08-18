const express = require("express");
const router = express.Router();
const OrderDetailController = require("../controllers/OrderDetailController");

router.post("/createOrderDetail", OrderDetailController.createOrderDetail);

router.get("/getAllOrderDetails", OrderDetailController.getAllOrderDetails);

router.get(
  "/getAllOrderDetailByOrderId/:id",
  OrderDetailController.getAllOrderDetailByOrderId
);

router.delete(
  "/deleteOrderDetail/:id",
  OrderDetailController.deleteOrderDetail
);

// router.get("/getOrderDetailsByOrderId/:orderId", OrderDetailController.getOrderDetailsByOrderId);

module.exports = router;
