const db = require("../models/index");

class CartService {
  async createCart({ userId, productId, quantity, total }) {
    try {
      const [cart, created] = await db.Cart.findOrCreate({
        where: {
          productId,
          userId,
        },
        defaults: {
          quantity,
          total,
        },
      });

      if (!created) {
        cart.quantity += quantity;
        cart.total += total;
        await cart.save();
      }
      return { cart };
    } catch (error) {
      console.error("Error in CartService:", error.message);
      throw new Error(error.message);
    }
  }
  async getAllCartByUserId(userId) {
    try {
      const getAllCartByUserId = await db.Cart.findAll({
        where: {
          userId,
        },
      });
      return getAllCartByUserId;
    } catch (error) {
      console.error("Error in CartService:", error.message);
      throw new Error(error.message);
    }
  }

  async deleteCart(id) {
    try {
      const cartItem = await db.Cart.findOne({
        where: {
          id,
        },
      });

      if (!cartItem) {
        return { error: "hiện tại không có id Trong giỏ hàng" };
      }

      const deleteCart = await db.Cart.destroy({
        where: {
          id,
        },
      });

      if (deleteCart) {
        return { message: "delete successfully!" };
      }
    } catch (error) {
      console.error("Error in CartService:", error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = new CartService();
