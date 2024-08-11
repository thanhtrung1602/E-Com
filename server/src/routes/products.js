const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");
const cloudinary = require("../config/cloudinary");

router.post(
  "/createProduct",
  cloudinary.single("img"),
  ProductsController.createProduct
);
router.get("/getAllProducts", ProductsController.getAllProducts);

module.exports = router;
