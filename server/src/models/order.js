"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "userData",
      });
    }
  }
  Order.init(
    {
      // thiếu total và status(trạng thái đang giao hay sao)
      userId: DataTypes.INTEGER,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "order",
    }
  );
  return Order;
};
