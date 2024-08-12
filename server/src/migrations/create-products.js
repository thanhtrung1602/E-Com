"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            category_id: {
                type: Sequelize.STRING,
            },
            manufacturer_id: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.STRING,
            },
            img: {
                type: Sequelize.STRING,
            },
            stock: {
                type: Sequelize.STRING,
            },
            visible: {
                type: Sequelize.STRING,
            },
            hot: {
                type: Sequelize.STRING,
            },
            date: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("products");
    },
};
