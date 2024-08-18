const express = require("express");
const router = express.Router();
const AttributeController = require("../controllers/AttributeController");

router.post("/createAttribute", AttributeController.createAttribute);
router.get("/getAllAttribute", AttributeController.getAllAttribute);
router.put("/updateAttribute/:id", AttributeController.updateAttribute);
router.delete("/deleteAttribute/:id", AttributeController.deleteAttribute);
router.get("/getOneAttribute/:id", AttributeController.getOneAttribute);

module.exports = router;