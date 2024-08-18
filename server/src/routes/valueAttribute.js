const express = require("express");
const router = express.Router();
const ValueAttributeController = require("../controllers/ValueAttributeController");

router.get(
  "/getAllValueAttribute",
  ValueAttributeController.getAllValueAttribute
);
router.get(
  "/getOneValueAttributeById/:id",
  ValueAttributeController.getOneValueAttributeById
);
router.post(
  "/createValueAttribute",
  ValueAttributeController.createValueAttribute
);
router.patch(
  "/updateValueAttribute/:id",
  ValueAttributeController.updateValueAttribute
);
router.delete(
  "/delValueAttribute/:id",
  ValueAttributeController.delValueAttribute
);

module.exports = router;
