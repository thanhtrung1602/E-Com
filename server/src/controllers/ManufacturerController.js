const ManufacturerService = require("../services/manufacturerService");

class ManufacturerController {
  async getAllManufacturer(req, res) {
    try {
      const getAllManufacturer = await ManufacturerService.getAllManufacturer();
      return res.status(200), json(getAllManufacturer);
    } catch (error) {
      throw error;
    }
  }
  async getOneManufacturerById(req, res) {
    const id = req.params.id;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const getOneManufacturerById =
        await ManufacturerService.getOneManufacturerById(numberId);
      return res.status(200).json(getOneManufacturerById);
    } catch (error) {
      throw error;
    }
  }
  async getOneManufacturerByIdCategory(req, res) {
    const id = req.params.id;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const getOneManufacturerByIdCategory =
        await ManufacturerService.getOneManufacturerByIdCategory(numberId);
      return res.status(200).json(getOneManufacturerByIdCategory);
    } catch (error) {
      throw error;
    }
  }
  async createManufacturer(req, res) {
    const { categoryId, name } = req.body;
    try {
      if (!categoryId || !name) {
        return res.status(401).json({ error: "invalid categoryId or name" });
      }

      const createManufacturer = await ManufacturerService.createManufacturer(
        req.body
      );

      return res.status(200).json(createManufacturer);
    } catch (error) {
      throw error;
    }
  }
  async updateManufacturer(req, res) {
    const id = req.params.id;
    const { categoryId, name } = req.body;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const updateManufacturer = await ManufacturerService.updateManufacturer(
        req.body,
        id
      );
      return res.status(200).json(updateManufacturer);
    } catch (error) {
      throw error;
    }
  }
  async delManufacturer(req, res) {
    const id = req.params.id;
    try {
      const numberId = parseInt(id);
      if (!numberId) {
        return res.status(400).json({ error: "missing id" });
      }
      const delManufacturer = await ManufacturerService.delManufacturer(id);
      return res.status(200).json(delManufacturer);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ManufacturerController();
