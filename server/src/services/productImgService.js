const { where } = require("sequelize");
const db = require("../models");
class ProductImgService {
    async createProductImg({ productId }, file) {
        console.log(file);
        const [productimg, created] = await db.ProductImg.findOrCreate({
          where: { productId },
          defaults: {
            img: file,
          },
        });
    
        if (!created) {
          return { error: "Sản phẩm này đã có trong store" };
        }
    
        return { productimg };
      }
}
module.exports = new ProductImgService()