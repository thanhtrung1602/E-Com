const productService = require("../services/productService");
class ProductController {
  getAllProducts() {}
  async createProduct(req, res) {
    const file = req.files["img"][0].path;
    try {
      const createProduct = await productService.createProduct(req.body, file);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductController();
