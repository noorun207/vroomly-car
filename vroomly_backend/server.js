import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/database.js";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carUploadroutes.js";
import { errorHandler } from "./middleware/errormiddleware.js";
import profileroutes from "./routes/profileRoutes.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/seller/carsupload", carRoutes);
app.use("/seller/profile", profileroutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
