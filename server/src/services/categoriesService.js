const db = require("../models");
const categories = require("../models/categories");

class CategoriesService {
  async createCategories({ name }) {
    console.log(db.Categories);
    try {
      const [category, created] = await db.Categories.findOrCreate({
        where: {
          name,
        },
        defaults: {
          name,
        },
      });

      if(!created) {
        return { error: "categories da co trong database" };
      }
      return category;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllCategories() {
    try {
      const allCategories = await db.Categories.findAll();
      console.log('All categories:', allCategories);
      return allCategories;
    } catch (error) {
      console.error('Error in getAllCategories:', error.message);
      throw new Error(error.message);
    }
  }
  async getCategoryById(id) {
    try {
      const category = await db.Categories.findByPk(id);
      return category;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateCategories(id, { name }) {
    try {
      const [updated] = await db.Categories.update({ name }, {
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
