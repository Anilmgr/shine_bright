

import { Router } from "express";
import {
    createTestimonial,
    deleteTestimonial,
    getAllTestimonials,
    getSingleTestimonial,
    updateTestimonial,
} from "../controllers/testimonialController.js";
import { validateTestimonialInput, validateTestimonialIdParam } from "../middleware/validationMiddleware.js";
import { authenticatedUser } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/").get(getAllTestimonials).post(authenticatedUser, validateTestimonialInput, createTestimonial);
router
    .route("/:id")
    .get(validateTestimonialIdParam, getSingleTestimonial)
    .delete(authenticatedUser, validateTestimonialIdParam, deleteTestimonial)
    .patch(authenticatedUser, validateTestimonialIdParam, updateTestimonial);

export default router;
