import { Router } from "express";
import {
    createBooking,
    deleteBooking,
    getAllBookings,
    getSingleBooking,
    updateBooking,
} from "../controllers/bookingController.js";
import { validateBookingInput, validateBookingIdParam } from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(getAllBookings).post(validateBookingInput, createBooking);
router
    .route("/:id")
    .get(validateBookingIdParam, getSingleBooking)
    .delete(validateBookingIdParam, deleteBooking)
    .patch(validateBookingIdParam, updateBooking);

export default router;
