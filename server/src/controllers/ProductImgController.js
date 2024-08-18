const ProductImgService = require("../services/productImgService");
class ProductImgController {
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
}
module.exports = new ProductImgController()