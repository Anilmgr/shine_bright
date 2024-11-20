import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import { validateLoginInput, validateUserInput } from "../middleware/validationMiddleware.js";

const router = Router()

router.post('/register', validateUserInput, register)
router.post('/login', validateLoginInput, login)
router.get('/logout', logout)

export default router;