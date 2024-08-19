const productService = require("../services/productService");
class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productService.getAllProducts();
      return res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOneProduct(req, res) {
    try {
      const product = await productService.getOneProduct(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
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
    const file = req.file ? req.file.path : null;
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

  async deleteProduct(req, res) {
    try {
      const deletedProduct = await productService.deleteProduct(
        req.params.id
      );
      res.status(200).json(deletedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async searchProduct (req, res) {
    try {
      const products = await productService.searchProduct(req.query);
      return res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
