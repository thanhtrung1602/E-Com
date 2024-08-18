const db = require("../models");

class OrderDetailService {
    async createOrderDetail({ orderId, productId, quantity, total }) {
        try {
            const orderDetail = await db.OrderDetail.findOrCreate({ 
                where: {
                    orderId,
                    productId,
                  },
                  defaults: {
                    quantity,
                    total,
                  },
            });

            return orderDetail;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getAllOrderDetails() {
        try {
            const orderDetails = await db.OrderDetail.findAll();
            return orderDetails;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteOrderDetail(orderDetailId) {
        try {
            const deleted = await db.OrderDetail.destroy({
                where: { id: orderDetailId },
            });
            return deleted; // Trả về số lượng khi đã bị xóa
        } catch (error) {
            throw new Error(error.message);
        }
    }
    // async getOrderDetailsByOrderId(orderId) {
    //     try {
    //         const orderDetails = await db.OrderDetail.findAll({
    //             where: { orderId },
    //             include: [
    //                 {
    //                     model: db.Product,
    //                     as: "productData",
    //                 },
    //                 {
    //                     model: db.Order,
    //                     as: "OrderData",
    //                 },
    //             ],
    //         });
    //         return orderDetails;
    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // }
}    

module.exports = new OrderDetailService();
