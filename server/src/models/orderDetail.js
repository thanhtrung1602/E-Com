"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Product, {
        foreignKey: "product_id",
        targetKey: "id",
        as: "productData",
      });
      OrderDetail.belongsTo(models.Order, {
        foreignKey: "order_id",
        targetKey: "id",
        as: "OrderData",
      });
    }
  }
  OrderDetail.init(
    {
        productId: DataTypes.STRING,
        orderId: DataTypes.STRING,
        quantity: DataTypes.STRING,
        total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
