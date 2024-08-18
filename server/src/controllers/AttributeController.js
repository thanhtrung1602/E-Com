const attributeService = require("../services/attributeSevice");

class AttributeController {

    async getAllAttribute(req, res) {
        try {
          const attribute = await attributeService.getAllAttribute();
          return res.status(200).json(attribute);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    async getOneAttribute(req, res) {
        try {
          const attribute = await attributeService.getOneAttribute(req.params.id);
          return res.status(200).json(attribute);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    async createAttribute(req, res) {
        try {
          const attribute = await attributeService.createAttribute(req.body);
          return res.status(200).json(attribute);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    async updateAttribute(req, res) {
        try {
          const attribute = await attributeService.updateAttribute(req.params.id, req.body);
          return res.status(200).json(attribute);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    async deleteAttribute(req, res) {
        try {
          const attribute = await attributeService.deleteAttribute(req.params.id);
          return res.status(200).json(attribute);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    

}

module.exports = new AttributeController();