const { where } = require("sequelize");
const db = require("../models/index");
class ManufacturerService {
  async getAllManufacturer() {
    try {
      const getAllManufacturer = await db.ManuFacturer.findAll();
      return getAllManufacturer;
    } catch (error) {
      throw error;
    }
  }
  async getOneManufacturerById(numberId) {
    try {
      const getOneManufacturerById = await db.ManuFacturer.findOne({
        where: {
          id: numberId,
        },
      });

      if (!getOneManufacturerById) {
        return { error: `Không tìm thấy Manufacturer by id ${numberId}` };
      }

      return getOneManufacturerById;
    } catch (error) {
      throw error;
    }
  }
  async getOneManufacturerByIdCategory(numberId) {
    try {
      const getOneManufacturerByIdCategory = await db.ManuFacturer.findOne({
        where: {
          categoryId: numberId,
        },
      });

      if (!getOneManufacturerByIdCategory) {
        return { error: `Không tìm thấy Manufacturer by id ${numberId}` };
      }

      return getOneManufacturerByIdCategory;
    } catch (error) {
      throw error;
    }
  }
  async createManufacturer(categoryId, name) {
    try {
      const [createManufacturer, created] = await db.ManuFacturer.findOrCreate({
        where: {
          categoryId,
        },
        defaults: {
          name,
        },
      });

      if (!created) {
        return { error: "categoryId này đã được tạo" };
      }

      return createManufacturer;
    } catch (error) {
      throw error;
    }
  }
  async updateManufacturer(categoryId, name, id) {
    try {
      const getOneManufacturerById = await db.ManuFacturer.findOne({
        where: {
          id: id,
        },
      });

      if (!getOneManufacturerById) {
        return { error: `Không tìm thấy Manufacturer by id ${numberId}` };
      }

      const updateManufacturer = await db.ManuFacturer.update(
        { categoryId, name },
        {
          where: {
            id,
          },
        }
      );

      if (updateManufacturer) {
        return { message: "update successfully!" };
      }
    } catch (error) {
      throw error;
    }
  }
  async delManufacturer(id) {
    try {
      const getOneManufacturerById = await db.ManuFacturer.findOne({
        where: {
          id: id,
        },
      });

      if (!getOneManufacturerById) {
        return { error: `Không tìm thấy Manufacturer by id ${numberId}` };
      }

      const delManufacturer = await db.ManuFacturer.destroy({
        where: {
          id,
        },
      });

      if (delManufacturer) {
        return { message: "update successfully!" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ManufacturerService();
