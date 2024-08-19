const categoriesService = require("../services/CategoriesService");

class CategoriesController {
  async createCategories(req, res) {
    const { name } = req.body;
    try {
      if (!name) {
        return res.status(400).json("Invalid input: Name is required");
      }

      const createCategories = await categoriesService.createCategories(req.body);
      return res.status(200).json(createCategories);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
    }
  }
  async getAllCategories(req, res) {
    try {
      const getAllCategories = await categoriesService.getAllCategories();  
      return res.status(200).json(getAllCategories);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
    }
  }
  async getCategoryById(req, res) {
    const { id } = req.params;
    try {
      const categories = await categoriesService.getCategoryById(id);
      if (!categories) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
    }
  }
  async updateCategories(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      if (!name) {
        return res.status(400).json("Invalid input: Name is required");
      }

      const updatedCategory = await categoriesService.updateCategories(id, req.body);
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json(updatedCategory);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
    }
  }
  async deleteCategories(req, res) {
    const { id } = req.params;
    try {
      const deleted = await categoriesService.deleteCategories(id);
      if (!deleted) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "An error occurred", details: error.message });
    }
  }
}
module.exports = new CategoriesController();
