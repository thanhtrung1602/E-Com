const { where } = require("sequelize");
const db = require("../models");

class CommentsService {
    async createComment({userId, productId, comment,date}) {
       const [comments, created] = await db.Comment.findOrCreate({
        where: { productId  },
        defaults: {
            userId,
            comment,
            date
        },
       })
       if (!created) {
        return { error: "Sản phẩm không có trong store" };
       }
       return { comments };
    }
    async getAllComment() {
       try {
        const comment = await db.Comment.findAll();
        return {comment};
       } catch (error) {
        console.log(error);
       }
    }

    async deleteComment(id) {
       try {
        const comment = await db.Comment.destroy({
            where: { id },
        });
        return {comment};
       } catch (error) {
        console.log(error);
       }
    }

    async getOneComment(id) {
       try {
        const comment = await db.Comment.findOne({
            where: { id },
        });
        return {comment};
       } catch (error) {
        console.log(error);
       }
    }
}

module.exports = new CommentsService()