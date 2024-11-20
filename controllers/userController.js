import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Booking from "../models/BookingModel.js";

export const getCurrentUser = async (req, res) => {
    const user = await User.findById(req.user.userId);
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const bookings = await Booking.countDocuments();
    res.status(StatusCodes.OK).json({ users,bookings});
};

export const updateUser = async (req, res) => {
    const newUser = { ...req.body };
    delete newUser.password;
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
    res.status(StatusCodes.OK).json({ message: "User updated!" });
};
