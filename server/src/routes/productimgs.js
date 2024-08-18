const express = require("express");
const router = express.Router();
const ProductImgController = require("../controllers/ProductImgController");
const cloudinary = require("../config/cloudinary");

router.post("/createProductImg",cloudinary.single("img"),ProductImgController.createProductImg);
router.get("/getAllProductImgs", ProductImgController.getAllProductImg);
router.get("/getOneProductImg/:id", ProductImgController.getOneProductImg);
router.put("/updateProductImg/:id",cloudinary.single("img"), ProductImgController.updateProductImg);
router.delete("/deleteProductImg/:id", ProductImgController.deleteProductImg);

module.exports = router;