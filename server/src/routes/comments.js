const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/CommentController");


router.get("/getAllComment", commentsController.getAllComment);
router.get("/getOneComment/:id", commentsController.getOneComment);
router.post("/createComment", commentsController.createComment);
router.delete("/deleteComment/:id", commentsController.deleteComment);
router.put("/updateComment/:id", commentsController.updateComment);


module.exports = router;