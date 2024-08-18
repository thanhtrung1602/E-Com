const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController");

router.get("/getAllCategories", CategoriesController.getAllCategories);

router.get("/getCategoryById/:id", CategoriesController.getCategoryById);

router.post("/createCategories", CategoriesController.createCategories);

router.put("/updateCategories/:id", CategoriesController.updateCategories);

router.delete("/deleteCategories/:id", CategoriesController.deleteCategories);

module.exports = router;
