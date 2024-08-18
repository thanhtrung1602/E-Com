const db = require("../models");

class OrderService {
  async createOrder({ userId, street, city, phone, total, status }) {
    try {
      const order = await db.Order.create({
        street,
        city,
        phone,
        userId,
        total,
        status,
      });
  
      return order;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  

  async getAllOrder() {
    try {
      const allOrders = await db.Order.findAll();
      return allOrders;
    } catch (error) {
      throw error;
    }
  }

  async getOrderById(id) {
    try {
      const order = await db.Order.findOne({ where: { id } });
      return order;
    } catch (error) {
      throw error;
    }
  }
  
  async getOrderUserById(userId) {
    try {
      const orders = await db.Order.findAll({
        where: { userId },
      });
  
      return orders;
    } catch (error) {
      throw error;
    }
  }
  

  async updateOrder(id, { userId, street, city, phone, total, status }) {
    try {
      const order = await db.Order.findOne({ where: { id } });
      if (!order) {
        return null; 
      }
      await db.Order.update(
        { userId, street, city, phone, total, status },
        { where: { id } }
      );
      const updatedOrder = await db.Order.findOne({ where: { id } });
      return updatedOrder;
    } catch (error) {
      throw error;
    }
  }
  

  async deleteOrder(id) {
    try {
      const deletedOrder = await db.Order.destroy({
        where: { id },
      });
  
      if (!deletedOrder) {
        return null; 
      }
  
      return { message: "Order deleted successfully" };
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = new OrderService();
