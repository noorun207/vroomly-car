import express from "express";
import { protect } from "../middleware/authmiddleware.js";
import { getProfile, submitKyc } from "../controllers/profileController.js";
import { upload } from "../utils/cloudinaryUpload.js";

const router = express.Router();

router.get("/", protect, getProfile);

router.post(
  "/kyc",
  protect,
  upload.fields([
    { name: "aadhaar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "selfie", maxCount: 1 },
  ]),
  submitKyc
);

export default router;
