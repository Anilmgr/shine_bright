import Testimonial from "../models/TestimonialModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllTestimonials = async (req, res) => {
    const testimonials = await Testimonial.find();

    res.status(StatusCodes.OK).json({ testimonials });
};

export const createTestimonial = async (req, res) => {
    const testimonial = await Testimonial.create(req.body);
    res.status(StatusCodes.CREATED).json({ testimonial });
};

export const getSingleTestimonial = async (req, res) => {
    const testimonial = await Testimonial.findOne({
        _id: req.params.id
    });
    if (!testimonial) throw new NotFoundError("Testimonial not found!");
    res.status(StatusCodes.OK).json(testimonial);
};

export const updateTestimonial = async (req, res) => {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({
        message: "Updated successfully",
        testimonial: updatedTestimonial,
    });
};

export const deleteTestimonial = async (req, res) => {
    const removedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({
        message: "Deleted successfully",
        testimonial: removedTestimonial,
    });
};