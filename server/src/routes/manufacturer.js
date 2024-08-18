const express = require("express");
const router = express.Router();
const ManufacturerController = require("../controllers/ManufacturerController");

router.get("/getAllManufacturer", ManufacturerController.getAllManufacturer);
router.get(
  "/getOneManufacturerById/:id",
  ManufacturerController.getOneManufacturerById
);
router.get(
  "/getOneManufacturerByIdCategory/:id",
  ManufacturerController.getOneManufacturerByIdCategory
);
router.post("/createManufacturer", ManufacturerController.createManufacturer);
router.patch(
  "/updateManufacturer/:id",
  ManufacturerController.updateManufacturer
);
router.delete("/delManufacturer/:id", ManufacturerController.delManufacturer);

module.exports = router;
