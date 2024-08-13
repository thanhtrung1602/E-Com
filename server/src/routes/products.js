const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductController");
const cloudinary = require("../config/cloudinary");

router.post("/createProduct",cloudinary.single("img"),ProductsController.createProduct);
router.get("/getAllProducts", ProductsController.getAllProducts);
router.get("/getOneProduct/:id", ProductsController.getOneProduct);
router.put("/updateProduct/:id",cloudinary.single("img"), ProductsController.updateProduct); 
router.delete("/deleteProduct/:id", ProductsController.deleteProduct);
router.post("/searchProduct", ProductsController.searchProduct);

module.exports = router;
