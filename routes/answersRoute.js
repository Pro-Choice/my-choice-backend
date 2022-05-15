const express = require("express");
const answersController = require("../controllers/answersController");
//const CommentsController = require("../controllers/commentsController");
const router = express.Router();

router.get("answers", answersController.getAnswers);

router.get("/answers/:id", answersController.getSingleAnswers);

router.post("/answers", answersController.createAnswers);

// router.put("/:id", BlogsController.updateBlog);

// router.delete("/:id", BlogsController.deleteBlog);

// router.get("/:id/comments", CommentsController.getCommentsOfBlog);

// router.post("/:id/comments", CommentsController.createCommentOfBlog);

module.exports = router;
