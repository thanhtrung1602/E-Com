const productService = require("../services/productService");
class ProductController {
  getAllProducts() {}
  async createProduct(req, res) {
    try {
      console.log(req.file);
      const file = req.file.path;
      console.log(file);
      const product = await productService.createProduct(req.body, file);
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateProduct(req, res) {
    const file = req.file.path;
    try {
      const updatedProduct = await productService.updateProduct(
        req.params.id,
        req.body,
        file
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
