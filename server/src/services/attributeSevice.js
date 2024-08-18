const db = require("../models");
class AttributeService {
    async createAttribute({name}) {
        try {
            if (!name) {
                return { error: "Giá trị 'name' không hợp lệ hoặc không được cung cấp" };
            }
        
            const [attribute, created] = await db.Attribute.findOrCreate({
                where: {name} ,
            });
            if (!created) {
                return { error: "Thuộc tính đã tồn tại" };
            }
            return { attribute };
        } catch (error) {
            return { error: "Đã xảy ra lỗi trong quá trình tạo thuộc tính: " + error.message };
        }

        
    }

 

    async getAllAttribute() {
        try {
            const attribute = await db.Attribute.findAll();
            return { attribute };
        } catch (error) {
            return { error: "Đã xảy ra lỗi trong quá trình tạo thuộc tính: " + error.message };
        }
    }


    async getOneAttribute(id) {
        try {
            const attribute = await db.Attribute.findOne({
                where: { id },
            });
            return { attribute };
        } catch (error) {
            return { error: "Đã xảy ra lỗi trong quá trình tạo thuộc tính: " + error.message };
        }
    }

    async updateAttribute(id,body) {
        try {
            const attribute = await db.Attribute.findOne(body,{
                where: { id },
            });
            if (!attribute) {
                return { error: "Thuộc tính không có trong store" };
            }
            await attribute.update(body);
            return { attribute };
        } catch (error) {
            return { error: "Đã xảy ra lỗi trong quá trình tạo thuộc tính: " + error.message };
        }
    }

    async deleteAttribute(id) {
        try {
            const deletedAttribute = await db.Attribute.destroy({
                where: { id },
            }); 
            return { deletedAttribute };
        } catch (error) {
            return { error: "Đã xảy ra lỗi trong quá trình tạo thuộc tính: " + error.message };
        }
    }

}





module.exports = new AttributeService()