import Booking from "../models/BookingModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllBookings = async (req, res) => {
    const { search, serviceType, bookingStatus, sort } = req.query;
    const queryObject = {};
    if (search) {
        queryObject.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
        ];
    }
    if (serviceType && serviceType !== "all") {
        queryObject.serviceType = serviceType;
    }

    if (bookingStatus && bookingStatus !== "all") {
        queryObject.bookingStatus = bookingStatus;
    }

    const sortOptions = {
        newest: "-createdAt",
        oldest: "createdAt",
        "a-z": "name",
        "z-a": "-name",
    };
    const sortKey = sortOptions[sort] || sortOptions.newest;
    const totalBookings = await Booking.countDocuments(queryObject);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const numOfPage = Math.ceil(totalBookings / limit);
    const bookings = await Booking.find(queryObject).sort(sortKey).skip(skip).limit(limit);

    res.status(StatusCodes.OK).json({ totalBookings, numOfPage, currentPage:page, bookings });
};

export const createBooking = async (req, res) => {
    const booking = await Booking.create(req.body);
    res.status(StatusCodes.CREATED).json({ booking });
};

export const getSingleBooking = async (req, res) => {
    const booking = await Booking.findOne({
        _id: req.params.id
    });
    if (!booking) throw new NotFoundError("Booking not found!");
    res.status(StatusCodes.OK).json(booking);
};

export const updateBooking = async (req, res) => {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({
        message: "Updated successfully",
        booking: updatedBooking,
    });
};

export const deleteBooking = async (req, res) => {
    const removedBooking = await Booking.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({
        message: "Deleted successfully",
        booking: removedBooking,
    });
};