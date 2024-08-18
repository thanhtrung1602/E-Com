const { where } = require("sequelize");
const db = require("../models/index");
class ValueAttributeService {
  async getAllValueAttribute() {
    try {
      const getAllValueAttribute = await db.AttributeValue.findAll();
      return getAllValueAttribute;
    } catch (error) {
      throw error;
    }
  }
  async getOneValueAttributeById(numberId) {
    try {
      const getOneValueAttributeById = await db.AttributeValue.findOne({
        where: {
          id: numberId,
        },
      });

      if (!getOneValueAttributeById) {
        return {
          error: `Không tìm thấy getOneValueAttributeById by id ${numberId}`,
        };
      }

      return getOneValueAttributeById;
    } catch (error) {
      throw error;
    }
  }
  async createValueAttribute(attributeId, productId, value) {
    try {
      const [createValueAttribute, created] =
        await db.AttributeValue.findOrCreate({
          where: {
            attributeId,
          },
          defaults: {
            productId,
            value,
          },
        });

      if (!created) {
        return { error: "attributeId này đã được tạo" };
      }

      return createValueAttribute;
    } catch (error) {
      throw error;
    }
  }
  async updateValueAttribute(attributeId, productId, value, id) {
    try {
      const getOneValueAttributeById = await db.AttributeValue.findOne({
        where: {
          id: numberId,
        },
      });

      if (!getOneValueAttributeById) {
        return {
          error: `Không tìm thấy getOneValueAttributeById by id ${numberId}`,
        };
      }

      const updateValueAttribute = await db.AttributeValue.update(
        { attributeId, productId, value },
        {
          where: {
            id,
          },
        }
      );

      if (updateValueAttribute) {
        return { message: "update successfully!" };
      }
    } catch (error) {
      throw error;
    }
  }
  async delValueAttribute(numberId) {
    try {
      const getOneValueAttributeById = await db.AttributeValue.findOne({
        where: {
          id: numberId,
        },
      });

      if (!getOneValueAttributeById) {
        return {
          error: `Không tìm thấy getOneValueAttributeById by id ${numberId}`,
        };
      }

      const delValueAttribute = await db.AttributeValue.destroy({
        where: {
          id: numberId,
        },
      });

      if (delValueAttribute) {
        return { message: "delete successfully!" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ValueAttributeService();
