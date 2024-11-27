

import { Router } from "express";
import {
    createBlog,
    deleteBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
} from "../controllers/blogController.js";
import { validateBlogInput, validateBlogIdParam } from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.route("/").get(getAllBlogs).post(upload.single('featuredImage'), validateBlogInput, createBlog);
router
    .route("/:id")
    .get(validateBlogIdParam, getSingleBlog)
    .delete(validateBlogIdParam, deleteBlog)
    .patch(upload.single('featuredImage'), validateBlogIdParam, updateBlog);

export default router;
