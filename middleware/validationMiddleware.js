import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customError.js";
import { SERVICE_TYPE } from "../utils/constants.js";
import Booking from "../models/BookingModel.js";
import Testimonial from "../models/TestimonialModel.js";
import Blog from "../models/BlogModel.js";
import Service from "../models/ServiceModel.js";
import mongoose from "mongoose";
import User from "../models/UserModel.js";


const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            console.log(req);
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith("Booking not found")) {
                    throw new NotFoundError(errorMessages);
                }
                if(errorMessages[0].startsWith("Not authorized")){
                    throw new UnauthorizedError("Not authorized to access this route!");
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

export const validateBookingInput = withValidationErrors([
    body("name")
        .notEmpty()
        .withMessage("Name is required!")
        .trim(),
    body("email")
        .notEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Invalid email format!")
        .normalizeEmail(),
    body("phone")
        .notEmpty()
        .withMessage("Phone is required!")
        .matches(/^[+\d]?[0-9\s\-().]{9,}$/)
        .withMessage("Invalid phone number format!"),
    body("serviceType")
        .isIn(Object.values(SERVICE_TYPE))
        .withMessage("Invalid service type!"),
    body("preferredDate")
        .notEmpty()
        .withMessage("Preferred date is required!")
        .isISO8601()
        .withMessage("Preferred date must be in YYYY-MM-DD format!")
        .custom((date) => {
            const selectedDate = new Date(date);
            if (selectedDate < new Date()) {
                throw new Error("Preferred date cannot be in the past!");
            }
            return true;
        }),
        body("preferredTime")
        .notEmpty()
        .withMessage("Preferred time is required!")
        .matches(/^([01]\d|2[0-3]):[0-5]\d$/)
        .withMessage("Preferred time must be in HH:mm format (e.g., 14:30)")
        .custom((value) => {
            const [hours, minutes] = value.split(":").map(Number);
            if (hours < 8 || (hours === 18 && minutes > 0) || hours > 18) {
                throw new Error("Preferred time must be between 08:00 and 18:00 (6 PM).");
            }
            return true;
        }),    
    body("address")
        .notEmpty()
        .withMessage("Address is required!")
        .trim(),
    body("specialInstructions")
        .optional()
        .trim(),
]);

export const validateBlogInput = withValidationErrors([
    body("title")
        .notEmpty()
        .withMessage("Title is required!")
        .trim(),
    body("description")
        .notEmpty()
        .withMessage("Description is required!")
        .trim()
]);

export const validateTestimonialInput = withValidationErrors([
    body("name")
        .notEmpty()
        .withMessage("Name is required!")
        .trim(),
    body("feedback")
        .notEmpty()
        .withMessage("Feedback is required!")
        .trim(),
    body("serviceType")
        .isIn(Object.values(SERVICE_TYPE))
        .withMessage("Invalid service type!"),
]);

export const validateServiceInput = withValidationErrors([
    body("title")
        .notEmpty()
        .withMessage("Title is required!")
        .trim(),
    body("description")
        .notEmpty()
        .withMessage("Description is required!")
        .trim()
]);

export const validateBookingIdParam = withValidationErrors([
    param("id").custom(async (value,{req}) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new Error("Invalid MongoDB ID!");
        const booking = await Booking.findById(value);
        if (!booking) throw new NotFoundError("Booking not found!");
    }),
]);

export const validateTestimonialIdParam = withValidationErrors([
    param("id").custom(async (value,{req}) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new Error("Invalid MongoDB ID!");
        const testimonial = await Testimonial.findById(value);
        if (!testimonial) throw new NotFoundError("Testimonial not found!");
    }),
]);

export const validateServiceIdParam = withValidationErrors([
    param("id").custom(async (value,{req}) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new Error("Invalid MongoDB ID!");
        const service = await Service.findById(value);
        if (!service) throw new NotFoundError("Service not found!");
    }),
]);

export const validateBlogIdParam = withValidationErrors([
    param("id").custom(async (value,{req}) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new Error("Invalid MongoDB ID!");
        const blog = await Blog.findById(value);
        if (!blog) throw new NotFoundError("Blog not found!");
    }),
]);

export const validateUserInput = withValidationErrors([
    body("name").notEmpty().withMessage("Name is required!"),
    body("email")
        .notEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Invalid email format")
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) throw new BadRequestError("Email already exist!");
        }),
    body("password")
        .notEmpty()
        .withMessage("Password is required!")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 character!"),
    body("location").notEmpty().withMessage("Location is required!"),
    body("lastName").notEmpty().withMessage("Last Name is required!"),
]);

export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Invalid email format"),
    body("password")
        .notEmpty()
        .withMessage("Password is required!")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 character!"),
]);

export const validateUpdateUserInput = withValidationErrors([
    body("name").notEmpty().withMessage("Name is required!"),
    body("email")
        .notEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Invalid email format")
        .custom(async (email, {req}) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) throw new BadRequestError("Email already exist!");
        }),
    body("location").notEmpty().withMessage("Location is required!"),
    body("lastName").notEmpty().withMessage("Last Name is required!"),
]);
