import "express-async-errors";
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bookingRouter from "./routes/bookingRouter.js"
import blogRouter from "./routes/blogRouter.js"
import serviceRouter from "./routes/serviceRouter.js"
import testimonialRouter from "./routes/testimonialRouter.js"
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import morgan from "morgan";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticatedUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from 'cors';


let app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(cors())
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routers
app.use("/api/v1/bookings", bookingRouter);

app.use("/api/v1/blogs", blogRouter);

app.use("/api/v1/services", serviceRouter);

app.use("/api/v1/testimonials", testimonialRouter);

app.use("/api/v1/users", authenticatedUser, userRouter);

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
    res.status(404).json({ message: "Requested uri not found" });
}); 

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

try {
    await mongoose.connect(process.env.CONNECT_URI);
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}!!`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}