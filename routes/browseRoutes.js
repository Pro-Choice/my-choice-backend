const express = require("express");
//const BlogsController = require("../controllers/blogsController");
const browseController = require("../controllers/browseController");
const router = express.Router();

router.get("/browse", browseController.getBlogs);

router.get("/:id", browseController.getSingleBlog);

router.post("/", browseController.createBlog);

//router.put("/:id", browseController.updateBlog);

//router.delete("/:id", browseController.deleteBlog);

//router.get("/:id/comments", browseController.getCommentsOfBlog);

//router.post("/:id/comments", browseController.createCommentOfBlog);

module.exports = router;