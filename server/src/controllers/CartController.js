const cartService = require("../services/cartService");

class CartController {
  async createCart(req, res) {
    const { userId, productId, quantity, total } = req.body;
    try {
      console.log("product >>>>", productId);
      console.log("userId >>>>", userId);
      console.log(
        "quatity>>>>>>>>",
        quantity,
        "quantityCheck>>>>>>>",
        typeof quantity
      );
      console.log("total>>>>>>>>", total, "quantityCheck>>>>>>>", typeof total);
      if (
        !userId ||
        !productId ||
        isNaN(parsedQuantity) ||
        isNaN(parsedTotal) ||
        parsedQuantity <= 0 ||
        parsedTotal < 0
      ) {
        return res.status(400).json({ error: "Invalid input" });
      }
      const createCart = await cartService.createCart({
        userId,
        productId,
        quantity: parsedQuantity,
        total: parsedTotal,
      });
      return res.status(200).json(createCart);
    } catch (error) {
      console.error("Error creating cart:", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async getAllCart(req, res) {
    const { userId } = req.body;
    try {
      if (!userId) {
        return res.status(500).json("Invalid userId");
      }
      const getAllCart = await cartService.getAllCart(userId);
      return res.status(200).json(getAllCart);
    } catch (error) {
      console.error("Error getting cart:", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
  // async updateQuantity(req, res) {
  //   const { userId, productId, operation } = req.body;
  //   try {
  //     if (!userId || !productId || !["increase", "decrease"].includes(operation)) {
  //       return res.status(400).json({ error: "Invalid input" });
  //     }

  //     const cartItem = await cartService.updateQuantity(userId, productId, operation);
  //     return res.status(200).json(cartItem);
  //   } catch (error) {
  //     console.error("Error updating quantity:", error.message);
  //     return res.status(500).json({ error: "An error occurred", details: error.message });
  //   }
  // }

  async deleteCartItem(req, res) {
    const { userId, productId } = req.body;
    try {
      if (!userId || !productId) {
        return res.status(400).json({ error: "Invalid input" });
      }

      const result = await cartService.deleteCartItem(userId, productId);
      if (result) {
        return res
          .status(200)
          .json({ message: "Cart item deleted successfully" });
      } else {
        return res.status(404).json({ error: "Cart item not found" });
      }
    } catch (error) {
      console.error("Error deleting cart item:", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
  // async getCartItemTotal(req, res) {
  //   const userId = req.params.userId;
  //   const productId = req.params.productId;

  //   try {
  //     if (!userId || !productId) { pull
  //       return res.status(400).json({ error: "User ID and Product ID are required" });
  //     }

  //     const total = await cartService.getCartItemTotal(userId, productId);
  //     if (total !== null) {
  //       return res.status(200).json({ userId, productId, total });
  //     } else {
  //       return res.status(404).json({ error: "Cart item not found" });
  //     }
  //   } catch (error) {
  //     console.error("Error getting cart item total:", error.message);
  //     return res.status(500).json({ error: "An error occurred", details: error.message });
  //   }
  // }
}

module.exports = new CartController();
