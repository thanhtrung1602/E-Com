const orderService = require("../services/orderService");

class OrderController {
  async createOrder(req, res) {
    const { userId, street, city, phone, total, status } = req.body;
    const phoneRegex = /^\d{10}$/;
    try {

      if (!userId || !street || !city || !phone || !total || !status) {
        return res.status(400).json("Invalid input: All fields are required");
      }
  

      if (isNaN(userId)) {
        return res.status(400).json("userId phải là một số");
      }
  
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          error: "số điện thoại phải có 10 số",
        });
      }
  
      const newOrder = await orderService.createOrder({ userId, street, city, phone, total, status });
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
      const orderId = Number(id);
  
      if (isNaN(orderId)) {
        return res.status(400).json({ error: "Order ID phải là một số" });
      }
  
      const order = await orderService.getOrderById(orderId);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
  
      return res.status(200).json(order);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
  

  async getOrderUserById(req, res) {
    const { id } = req.params;
    try {
      const userId = Number(id);
      if (isNaN(userId)) {
        return res.status(400).json({ error: "Invalid User ID" });
      }
  
      const orders = await orderService.getOrderUserById(userId);
      if (!orders || orders.length === 0) {
        return res.status(404).json({ error: "No orders found for this user" });
      }
  
      return res.status(200).json(orders);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
  

  async updateOrder(req, res) {
    const { id } = req.params;
    const { userId, street, city, phone, total, status } = req.body;
    const phoneRegex = /^\d{10}$/;
  
    try {
      const orderId = Number(id);
      if (isNaN(orderId)) {
        return res.status(400).json({ error: "Invalid Order ID" });
      }
  
      if (!userId || !street || !city || !phone || !total || !status) {
        return res.status(400).json("Invalid input: All fields are required");
      }

      if (isNaN(userId)) {
        return res.status(400).json("userId phải là một số");
      }
  
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          error: "số điện thoại phải có 10 số",
        });
      }
  
      const updatedOrder = await orderService.updateOrder(orderId, { userId, street, city, phone, total, status });
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
    const { id } = req.params;
    try {
      const orderId = Number(id);
      if (isNaN(orderId)) {
        return res.status(400).json({ error: "Invalid Order ID" });
      }
  
      const deletedOrder = await orderService.deleteOrder(orderId);
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
