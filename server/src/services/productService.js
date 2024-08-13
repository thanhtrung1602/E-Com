const db = require("../models");
class ProductService {
  async createProduct(
    { manufacturerId, name, price, promotion, stock, visible, hot },
    file
  ) {
    console.log(file);
    const [product, created] = await db.Product.findOrCreate({
      where: { name },
      defaults: {
        manufacturerId,
        price,
        promotion,
        img: file,
        stock,
        visible,
        hot,
      },
    });

    if (!created) {
      return { error: "Sản phẩm này đã có trong store" };
    }

    return { product };
  }
}

module.exports = new ProductService();
