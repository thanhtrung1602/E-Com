const cartService = require("../services/cartService");

class CartController {
  async createCart(req, res) {
    const { userId, productId, quantity, total } = req.body;
    try {
      if ((!userId || !productId, !quantity, !total)) {
        return res.status(500).json("invalid user");
      }

      if (typeof quantity && typeof total !== "number") {
        return res.status(500).json("quantity or total NaN");
      }
      const createCart = await cartService.createCart(req.body);
      return res.status(200).json(createCart);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CartController();
