const { where } = require("sequelize");
const db = require("../models");
class UserService {
  async getUser() {
    try {
      const getUser = await db.User.findAll();
      return getUser;
    } catch (error) {
      throw error;
    }
  }

  async updateUser({ phone, email, name, bom, ban }, id) {
    try {
      const checkUser = await db.User.findOne({
        where: {
          id,
        },
      });

      if (!checkUser) {
        return { error: "User không tồn tại" };
      }

      console.log("checkUser >>>>>>>>>>>>", checkUser);

      const updateUser = await db.User.update(
        {
          phone,
          email,
          name,
          ban,
          bom,
        },
        {
          where: {
            id: checkUser.dataValues.id,
          },
        }
      );

      if (updateUser) {
        return { message: "update user successfully!" };
      }
    } catch (error) {
      throw error;
    }
  }

  async delUser(id) {
    try {
      const checkUser = await db.User.findOne({
        where: {
          id,
        },
      });

      if (!checkUser) {
        return { error: "User không tồn tại" };
      }

      console.log("checkUser >>>>>>>>>>>>", checkUser);

      const delUser = await db.User.destroy({
        where: {
          id: checkUser.dataValues.id,
        },
      });

      if (delUser) {
        return { message: "delete user successfully!" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
