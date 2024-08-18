const cartService = require("../services/cartService");

class CartController {
  async createCart(req, res) {
    const { userId, productId, quantity, total } = req.body;
    try {

      if ((!userId || !productId, !quantity || !total)) {
        return res.status(500).json("invalid user");
      }
      const parsedQuantity = parseInt(quantity);
      const parsedTotal = parseInt(total);
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

  async getAllCartByUserId(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        return res.status(500).json("Invalid id");
      }
      const numberId = parseInt(id);
      const getAllCartByUserId = await cartService.getAllCartByUserId(numberId);
      return res.status(200).json(getAllCartByUserId);
    } catch (error) {
      console.error("Error getting cart:", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }

  async deleteCart(req, res) {
    const id = req.params.id;
    try {
      if (!id) {
        return res.status(500).json("Invalid id");
      }
      const numberId = parseInt(id);
      const deleteCart = await cartService.deleteCart(numberId);
      return res.status(200).json(deleteCart);
    } catch (error) {
      console.error("Error deleting cart item:", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred", details: error.message });
    }
  }
}

module.exports = new CartController();
