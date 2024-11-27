

import { Router } from "express";
import {
    createService,
    deleteService,
    getAllServices,
    getSingleService,
    updateService,
} from "../controllers/serviceController.js";
import { validateServiceInput, validateServiceIdParam } from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.route("/").get(getAllServices).post(upload.single('featuredImage'), validateServiceInput, createService);
router
    .route("/:id")
    .get(validateServiceIdParam, getSingleService)
    .delete(validateServiceIdParam, deleteService)
    .patch(upload.single('featuredImage'), validateServiceIdParam, updateService);

export default router;
