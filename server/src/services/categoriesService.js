const db = require("../models");

class CategoriesService {
  async createCategories({ name, img }) {
    try {
      const [categories, created] = await db.Categories.findOrCreate({
        where: { name },
        defaults: { name, img },
      });

      if (!created) {
        return { error: "Category already exists in the database" };
      }
      return categories;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllCategories() {
    try {
      const allCategories = await db.Categories.findAll();
      return allCategories;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getCategoryById(id) {
    try {
      const categories = await db.Categories.findByPk(id);
      return categories;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateCategories(id, { name, img }) {
    try {
      const [updated] = await db.Categories.update({ name, img }, {
        where: { id },
        returning: true,
      });

      if (updated === 0) {
        return null;
      }

      const updatedCategory = await db.Categories.findByPk(id);
      return updatedCategory;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteCategories(id) {
    try {
      const deleted = await db.Categories.destroy({
        where: { id },
      });

      return deleted > 0;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new CategoriesService();
