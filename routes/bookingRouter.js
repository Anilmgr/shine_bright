import { Router } from "express";
import {
    createBooking,
    deleteBooking,
    getAllBookings,
    getSingleBooking,
    updateBooking,
} from "../controllers/bookingController.js";
import { validateBookingInput, validateIdParam } from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(getAllBookings).post(validateBookingInput, createBooking);
router
    .route("/:id")
    .get(validateIdParam, getSingleBooking)
    .delete(validateIdParam, deleteBooking)
    .patch(validateIdParam, updateBooking);

export default router;
