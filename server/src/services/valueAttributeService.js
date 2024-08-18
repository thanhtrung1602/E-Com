class ValueAttributeService {
  async getAllValueAttribute() {}
  async getOneValueAttributeById(numberId) {}
  async createValueAttribute(numberAttributeId, numberProductId, value) {}
  async updateValueAttribute(numberAttributeId, numberProductId, value, id) {}
  async delValueAttribute(numberId) {}
}

module.exports = new ValueAttributeService();
