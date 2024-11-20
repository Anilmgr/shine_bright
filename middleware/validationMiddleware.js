import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customError.js";
import { SERVICE_TYPE } from "../utils/constants.js";
import Booking from "../models/BookingModel.js";
import mongoose from "mongoose";
import User from "../models/UserModel.js";


const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
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
        .matches(/^\d{10}$/)
        .withMessage("Phone number must be 10 digits!"),
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
        .withMessage("Preferred time must be in HH:mm format (e.g., 14:30)"),
    body("address")
        .notEmpty()
        .withMessage("Address is required!")
        .trim(),
    body("specialInstructions")
        .optional()
        .trim(),
]);

export const validateIdParam = withValidationErrors([
    param("id").custom(async (value,{req}) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new "Invalid MongoDB ID!"();
        const booking = await Booking.findById(value);
        if (!booking) throw new NotFoundError("Booking not found!");
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
