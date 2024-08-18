"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "userData",
      });
      Comment.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "productData",
      });
    }
  }
  Comment.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",

    }
  );
  return Comment;
};
