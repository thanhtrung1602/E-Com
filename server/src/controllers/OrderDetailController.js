const orderdetailService = require("../services/orderdetailService");

class OrderDetailController {async createOrderDetail(req, res) {
  // Lấy dữ liệu từ request body
  const { orderId, productId, quantity, total } = req.body;
  try {
      
      if (!orderId || !productId || !quantity || !total) {
          return res.status(400).json("Invalid input: All fields are required");
      }

      if (!Number.isInteger(orderId) || !Number.isInteger(productId) || !Number.isInteger(quantity) || quantity <= 0 || total <= 0) {
          return res.status(400).json("Invalid input: IDs and quantity/total must be valid positive integers");
      }

      const newOrderDetail = await orderdetailService.createOrderDetail(req.body);
      return res.status(200).json(newOrderDetail);
  } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
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
  async getAllOrderDetailByOrderId(req, res) {
    const { id } = req.params;
    try {
      if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json("Invalid input: Order ID must be a valid integer");
      }

      const orderDetails = await orderdetailService.getAllOrderDetailByOrderId(id);
      return res.status(200).json(orderDetails);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
    }
  }

  async deleteOrderDetail(req, res) {
    const { id } = req.params;
    try {
      const orderDetailId = Number(id);
      if (isNaN(orderDetailId)) {
        return res.status(400).json({ error: "Invalid Order Detail ID" });
      }
  
      const deletedOrderDetailCount = await orderdetailService.deleteOrderDetail(orderDetailId);
      
      if (deletedOrderDetailCount === 0) {
        return res.status(404).json({ error: "Order detail not found" });
      }
  
      return res
        .status(200)
        .json({ message: `Đã xóa chi tiết đơn hàng thành công, ${deletedOrderDetailCount} đơn hàng đã đã xóa.` });
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
