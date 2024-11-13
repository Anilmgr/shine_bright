import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bookingRouter from "./routes/bookingRouter.js"
import morgan from "morgan";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routers
app.use("/api/v1/bookings", bookingRouter);

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