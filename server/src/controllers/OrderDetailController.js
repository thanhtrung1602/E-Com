const orderdetailService = require("../services/orderdetailService");

class OrderDetailController {
  async createOrderDetail(req, res) {
    // check mấy thg này đưa vô có phải là id hay không
    const { orderId, productId, quantity, total } = req.body;
    try {
      if (!orderId || !productId || !quantity || !total) {
        return res.status(400).json("Invalid input: All fields are required");
      }

      const newOrderDetail = await orderdetailService.createOrderDetail(
        req.body
      );
      return res.status(200).json(newOrderDetail);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async getAllOrderDetails(req, res) {
    try {
      const orderDetails = await orderdetailService.getAllOrderDetails();
      return res.status(200).json(orderDetails);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async deleteOrderDetail(req, res) {
    //  check và làm theo order
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ error: "Order detail ID is required" });
      }

      const deletedOrderDetail = await orderdetailService.deleteOrderDetail(id);
      if (!deletedOrderDetail) {
        return res.status(404).json({ error: "Order detail not found" });
      }

      return res
        .status(200)
        .json({ message: "Order detail deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  // async getOrderDetailsByOrderId(req, res) {
  //     const  orderId  = req.params.orderId;
  //     console.log(typeof orderId);
  //     try {
  //         const orderDetails = await orderdetailService.getOrderDetailsByOrderId(orderId);
  //         if (orderDetails.length === 0) {
  //             return res.status(404).json({ message: "No order details found for the given orderId" });
  //         }
  //         return res.status(200).json(orderDetails);
  //     } catch (error) {
  //         return res.status(500).json({ error: "An error occurred", details: error.message });
  //     }
  // }
}

module.exports = new OrderDetailController();
