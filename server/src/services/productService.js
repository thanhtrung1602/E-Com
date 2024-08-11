const db = require("../models");
class ProductService {
  async createProduct({}, file) {
    const [product, created] = await db.Product.findOrCreate({
      where: {
        name,
      },
      defaults: {
        img: file,
      },
    });
  }
}

module.exports = new ProductService();
