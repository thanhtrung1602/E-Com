const db = require("../models");

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
      throw new Error(error.message);
    }
  }
}

module.exports = new CartService();
