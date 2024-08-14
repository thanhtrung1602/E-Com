const express = require("express");
const router = express.Router();
const ProductImgController = require("../controllers/ProductImgController");
const cloudinary = require("../config/cloudinary");

router.post("/createProductImg",cloudinary.single("img"),ProductImgController.createProductImg);

module.exports = router;