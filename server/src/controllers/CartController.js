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
        typeof Number(quantity) !== "number" ||
        typeof Number(total) !== "number"
      ) {
        return res.status(400).json("Invalid input");
      }

      const createCart = await cartService.createCart(req.body);
      return res.status(200).json(createCart);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
}

module.exports = new CartController();
