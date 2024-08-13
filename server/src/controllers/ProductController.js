const productService = require("../services/productService");
class ProductController {
  getAllProducts() { }
  async createProduct(req, res) {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const file = req.files[0].path;
        const product = await productService.createProduct(req.body, file);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
  async updateProduct(req, res) {
    const file = req.files[0].path; // Optional chaining in case no file is uploaded
    try {
      const updatedProduct = await productService.updateProduct(req.params.id, req.body, file);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
