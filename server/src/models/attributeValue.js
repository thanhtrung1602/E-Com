"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AttributeValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AttributeValue.belongsTo(models.Attribute, {
        foreignKey: "attributeId",
        targetKey: "id",
        as: "attributeData",
      });
<<<<<<< HEAD
      AttributeValue.belongsTo(models.Attribute, {
=======
      AttributeValue.belongsTo(models.Product, {
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce
        foreignKey: "productId",
        targetKey: "id",
        as: "productData",
      });
    }
  }
  AttributeValue.init(
    {
      attributeId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AttributeValue",
<<<<<<< HEAD
=======
      tableName: "attributevalue",
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce
    }
  );
  return AttributeValue;
};
