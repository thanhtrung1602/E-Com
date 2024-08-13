const { where } = require("sequelize");
const db = require("../models");
class ProductService {


  //Lấy tất cả sản sản phẩm trong database
  async getAllProducts() {
    try {
      const products = await db.Product.findAll();
      return { products };
    } catch (error) {
      return { error: error.message };
    }
  }
  //Lấy id của sản phẩm trong database
  async getOneProduct(id) {
    try {
      const product = await db.Product.findOne({
        where: { id },
      });
      return { product };
    } catch (error) {
      return { error: error.message };
    }
  }
  //Thêm sản phẩm tron database
  async createProduct({ categoryId, manufacturerId, name, price, promotion, stock, visible, hot }, file) {
    console.log(file);
    const [product, created] = await db.Product.findOrCreate({
      where: { name },
      defaults: {
        categoryId,
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

  async updateProduct(id, body, file) {
    try {
      const product = await db.Product.findOne({
        where: { id },});
      if (!product) {
        return { error: "Sản phẩm không có trong store" };
      }
      if (file) {
        body.img = file;
      }
      await product.update(body);
      return { product };
    } catch (error) {
      return { error: error.message };
    }
  }
  async deleteProduct(id) {
    try {
      const deletedProduct = await db.Product.destroy({
        where: {id},
      });
      return { deletedProduct };
    } catch (error) {
      return { error: error.message };  
    }
  }
  async searchProduct(query) {
    try {
      const products = await db.Product.findAll({
        where: {
          name: {
            [db.Sequelize.Op.like]: `%${query}%`,
          },
        },
      });
      return { products };
    } catch (error) {
      return { error: error.message };
    }
  }
}

module.exports = new ProductService();
