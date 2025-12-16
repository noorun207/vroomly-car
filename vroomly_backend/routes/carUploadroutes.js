// routes/carRoutes.js
import express from "express";
import { addCar } from "../controllers/UploadCarcontrller.js";
import { protect } from "../middleware/authmiddleware.js";
import { sellerOnly } from "../middleware/ownerOnly.js";

const router = express.Router();

// Seller uploads car
router.post("/add", protect, sellerOnly, addCar);

// Customer view cars
router.get("/", async (req, res) => {
  const cars = await Car.find({ isAvailable: true });
  res.json(cars);
});

export default router;
