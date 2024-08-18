const orderService = require("../services/orderService");

class OrderController {
  async createOrder(req, res) {
    // thiếu total và status, validate check sdt, check userId có phải Number hay k
    const { userId, street, city, phone } = req.body;
    try {
      if (!userId || !street || !city || !phone) {
        return res.status(400).json("Invalid input: All fields are required");
      }

      const newOrder = await orderService.createOrder(req.body);
      return res.status(200).json(newOrder);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async getAllOrder(req, res) {
    try {
      const getAllOrders = await orderService.getAllOrder();
      return res.status(200).json(getAllOrders);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async getOrderById(req, res) {
    const { id } = req.params;
    try {
      // chuyển đổi id, xóa dòng if dòng if viết bên service, kiểm tra id có hay không
      const getOrderById = await orderService.getOrderById(id);
      if (!getOrderById) {
        return res.status(404).json({ error: "Order not found" });
      }
      return res.status(200).json(getOrderById);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  // thiếu getOrderUserById

  async updateOrder(req, res) {
    // như thg createOrder với getOrderById ở trên
    const { id } = req.params;
    const { userId, street, city, phone } = req.body;
    try {
      if (!userId || !street || !city || !phone) {
        return res.status(400).json("Invalid input: All fields are required");
      }
      const updatedOrder = await orderService.updateOrder(id, req.body);
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async deleteOrder(req, res) {
    // check như và làm như getOrderById xóa if xử lý bên service
    const { id } = req.params;
    try {
      const deletedOrder = await orderService.deleteOrder(id);
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
}

module.exports = new OrderController();
