const express = require("express");
//const BlogsController = require("../controllers/blogsController");
const dashboardController = require("../controllers/dashboardController");
const router = express.Router();

router.get("/dashboard", dashboardController .getBlogs);

router.get("/dashboard/:id", dashboardController .getSingleBlog);

router.post("/dashboard", dashboardController.create);

//router.put("/:id", browseController.updateBlog);

//router.delete("/:id", browseController.deleteBlog);

//router.get("/:id/comments", browseController.getCommentsOfBlog);

//router.post("/:id/comments", browseController.createCommentOfBlog);

module.exports = router;