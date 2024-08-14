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
      console.error("Error in CartService:", error.message);
      throw new Error(error.message);
    }
  }
  async getAllCart(userId) {
    try {
      const cart = await db.Cart.findAll({
        where: {
          userId,
        },
      });
      return { cart };
    } catch (error) {
      console.error("Error in CartService:", error.message);
      throw new Error(error.message);
    }
  }
  // async updateQuantity(userId, productId, operation) {
  //   try {
  //     const cartItem = await db.Cart.findOne({
  //       where: { userId, productId },
  //     });

  //     if (!cartItem) {
  //       throw new Error("Cart item not found");
  //     }

  //     if (operation === "increase") {
  //       cartItem.quantity += 1; // tang so luong len 1
  //     } else if (operation === "decrease") {
  //       cartItem.quantity -= 1; // giam so luong xuong 1
  //       if (cartItem.quantity < 0) {
  //         cartItem.quantity = 0; // Ko cho so luong am
  //       }
  //     }

  //     await cartItem.save();
  //     return { cartItem };
  //   } catch (error) {
  //     console.error("Error in CartService:", error.message);
  //     throw new Error(error.message);
  //   }
  // }
  async deleteCartItem(userId, productId) {
    try {
      const cartItem = await db.Cart.findOne({
        where: { userId, productId },
      });

      if (!cartItem) {
        return false; // Trả về false nếu không tìm thấy sản phẩm trong giỏ hàng
      }

      await cartItem.destroy(); // Xóa sản phẩm khỏi giỏ hàng
      return true; // Trả về true sau khi xóa thành công
    } catch (error) {
      console.error("Error in CartService:", error.message);
      throw new Error(error.message);
    }
  }
  // async getCartItemTotal(userId, productId) {
  //   try {
  //     const cartItem = await db.Cart.findOne({
  //       where: { userId, productId },
  //       include: [{
  //         model: db.Product,
  //         as: "productData",
  //         attributes: ["price"],
  //       }],
  //     });
  
  //     if (!cartItem) {
  //       return null;
  //     }
  
  //     const total = cartItem.quantity * cartItem.productData.price;
  //     return total;
  //   } catch (error) {
  //     console.error("Error in CartService:", error.message);
  //     throw new Error(error.message);
  //   }
  // }
  
}

module.exports = new CartService();
