const db = require("../models");
class ProductService {
  async createProduct({ name }, file) {
    const [product, created] = await db.Product.findOrCreate({
      where: { name },
      defaults: { img: file },
    });

    return { product, created }; // Optional: return the product and creation status
  }
}

module.exports = new ProductService();
