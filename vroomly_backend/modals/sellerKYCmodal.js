import mongoose from "mongoose";

const kycSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    aadhaarNumber: String,
    panNumber: String,

    bankAccount: String,
    ifscCode: String,

    aadhaarImage: String,
    panImage: String,
    selfieWithId: String,

    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Kyc", kycSchema);
