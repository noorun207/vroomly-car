import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "kyc",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 800, crop: "limit" }],
  },
});

export const upload = multer({ storage });
export default upload;