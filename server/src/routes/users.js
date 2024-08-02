const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("hello user");
  res.send("Hello from users!");
});

module.exports = router;
