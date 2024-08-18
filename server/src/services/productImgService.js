const { where } = require("sequelize");
const db = require("../models");
class ProductImgService {

  async getAllProductImg() {
    try {
      const productimg = await db.ProductImg.findAll();
      return { productimg };
    } catch (error) {
      return { error };
    }
  }
  async getOneProductImg(id) {
    try {
      const productimg = await db.ProductImg.findOne({
        where: { id },
      });
      return { productimg };
    } catch (error) {
      return { error };
    }
  }
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

  async updateProductImg(id, body, file) {
    try {
      const productimg = await db.ProductImg.findOne(body, {
        where: { id },
      });
      if (!productimg) {
        return { error: "Sản phẩm không có trong store" };
      }
      if (file) {
        body.img = file;
      }
      await productimg.update(body);
      return { productimg };
    } catch (error) {
      return { error };
    }
  }

  async deleteProductImg(id) {
    try {
      const productimg = await db.ProductImg.destroy({
        where: { id },
      });
      return { productimg };
    } catch (error) {
      return { error };
    }
  }
}

module.exports = new ProductImgService()