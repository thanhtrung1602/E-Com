const ProductImgService = require("../services/productImgService");
class ProductImgController {
  async getAllProductImg(req, res) {
    try {
      const productimgs = await ProductImgService.getAllProductImg(req.body);
      return res.status(200).json(productimgs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async getOneProductImg(req, res) {
    try {
      const productimg = await ProductImgService.getOneProductImg(req.params.id);
      return res.status(200).json(productimg);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async createProductImg(req, res) {
    try {
      console.log(req.file);
      const file = req.file.path;
      console.log(file);
      const productimgs = await ProductImgService.createProductImg(req.body, file);
      return res.status(200).json(productimgs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProductImg(req, res) {
    try {
      const productimg = await ProductImgService.updateProductImg(
        req.params.id,
        req.body
      );
      return res.status(200).json(productimg);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProductImg(req, res) {
    try {
      const deletedProductImg = await ProductImgService.deleteProductImg(
        req.params.id,
        req.body
      );
      res.status(200).json(deletedProductImg);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new ProductImgController()