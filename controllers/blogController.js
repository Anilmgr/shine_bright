import Blog from "../models/BlogModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllBlogs = async (req, res) => {

    const blogs = await Blog.find()

    res.status(StatusCodes.OK).json({ blogs });
};

export const createBlog = async (req, res) => {
    if (req.file) {
        req.body.featuredImage = req.file.path;
    }
    const blog = await Blog.create(req.body);
    res.status(StatusCodes.CREATED).json({ blog });
};

export const getSingleBlog = async (req, res) => {
    const blog = await Blog.findOne({
        _id: req.params.id
    });
    if (!blog) throw new NotFoundError("Blog not found!");
    res.status(StatusCodes.OK).json(blog);
};

export const updateBlog = async (req, res) => {
    if (req.file) {
        req.body.featuredImage = req.file.path;
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({
        message: "Updated successfully",
        blog: updatedBlog,
    });
};

export const deleteBlog = async (req, res) => {
    const removedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({
        message: "Deleted successfully",
        blog: removedBlog,
    });
};