// models/Car.js
import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  brand: String,
  city: String,
  pricePerDay: Number,
  fuelType: String,
  transmission: String,
  seats: Number,
  image: String,
  isAvailable: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export default mongoose.model("Car", carSchema);
