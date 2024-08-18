const ValueAttributeService = require("../services/valueAttributeService");

class ValueAttributeController {
  async getAllValueAttribute(req, res) {
    try {
      const getAllValueAttribute =
        await ValueAttributeService.getAllValueAttribute();
      return res.status(200).json(getAllValueAttribute);
    } catch (error) {
      throw error;
    }
  }
  async getOneValueAttributeById(req, res) {
    const id = req.params.id;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const getOneValueAttributeById =
        await ValueAttributeService.getOneValueAttributeById(numberId);
      return res.status(200).json(getOneValueAttributeById);
    } catch (error) {
      throw error;
    }
  }
  async createValueAttribute(req, res) {
    const { attributeId, productId, value } = req.body;
    try {
      const numberAttributeId = parseInt(attributeId);
      const numberProductId = parseInt(productId);
      const createValueAttribute =
        await ValueAttributeService.createValueAttribute(
          numberAttributeId,
          numberProductId,
          value
        );
      return res.status(200).json(createValueAttribute);
    } catch (error) {
      throw error;
    }
  }
  async updateValueAttribute(req, res) {
    const id = req.params.id;
    const { attributeId, productId, value } = req.body;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const numberAttributeId = parseInt(attributeId);
      const numberProductId = parseInt(productId);
      const updateValueAttribute =
        await ValueAttributeService.updateValueAttribute(
          numberAttributeId,
          numberProductId,
          value,
          numberId
        );
      return res.status(200).json(updateValueAttribute);
    } catch (error) {
      throw error;
    }
  }
  async delValueAttribute(req, res) {
    const id = req.params.id;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const delValueAttribute = await ValueAttributeService.delValueAttribute(
        numberId
      );
      return res.status(200).json(delValueAttribute);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ValueAttributeController();
