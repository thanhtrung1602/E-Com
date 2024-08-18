"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ManuFacturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ManuFacturer.belongsTo(models.Categories, {
        foreignKey: "categoryId",
        targetKey: "id",
        as: "categoryData",
      });
    }
  }
  ManuFacturer.init(
    {
      categoryId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ManuFacturer",
    }
  );
  return ManuFacturer;
};
