const express = require("express");
const questionController = require("../controllers/blogsController");
//const CommentsController = require("../controllers/commentsController");
const router = express.Router();

router.get("/", questionController.getBlogs);

router.get("/:id", questionController.getSingleBlog);

router.post("/", questionController.createBlog);

// router.put("/:id", BlogsController.updateBlog);

// router.delete("/:id", BlogsController.deleteBlog);

// router.get("/:id/comments", CommentsController.getCommentsOfBlog);

// router.post("/:id/comments", CommentsController.createCommentOfBlog);

module.exports = router;