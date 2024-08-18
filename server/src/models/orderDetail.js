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
        foreignKey: "productId",
        targetKey: "id",
        as: "productData",
      });
      OrderDetail.belongsTo(models.Order, {
        foreignKey: "orderId",
        targetKey: "id",
        as: "OrderData",
      });
    }
  }
  OrderDetail.init(
    {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OrderDetail",
      tableName: "orderdetail",
    }
  );
  return OrderDetail;
};
