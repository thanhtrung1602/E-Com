const db = require("../models");

class OrderService {
  async createOrder({ userId, street, city, phone }) {
    try {
      const order = await db.Order.create({
        street,
        city,
        phone,
        userId,
      });

      //  không dùng thì xóa comment

      // if (!created) {
      //     return { error: "Order already exists in the database" };
      // }
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
      // dùng findOne để đồng bộ với mọi đoạn code
      const order = await db.Order.findByPk(id);
      return order;
    } catch (error) {
      throw error;
    }
  }

  async updateOrder(id, { userId, street, city, phone }) {
    try {
      // có đoạn code check và sử dùng hàm update để đồng bộ với mọi code
      const order = await db.Order.findByPk(id);
      if (!order) {
        return { error: "Order not found" };
      }
      order.street = street || order.street;
      order.city = city || order.city;
      order.phone = phone || order.phone;
      await order.save();
      return order;
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(id) {
    try {
      //  return ra message để hiện thông báo check sang code Trung xem
      const deletedOrder = await db.Order.destroy({
        where: { id },
      });
      if (!deletedOrder) {
        return { error: "Order not found" };
      }
      return deletedOrder;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new OrderService();
