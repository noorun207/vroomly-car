import Kyc from "../modals/sellerKYCmodal.js";

export const submitKyc = async (req, res) => {
  try {
    const {
      aadhaarNumber,
      panNumber,
      bankAccount,
      ifscCode,
    } = req.body;

    const kyc = await Kyc.findOneAndUpdate(
      { user: req.user._id },
      {
        aadhaarNumber,
        panNumber,
        bankAccount,
        ifscCode,
        aadhaarImage: req.files?.aadhaar?.[0]?.path,
        panImage: req.files?.pan?.[0]?.path,
        selfieWithId: req.files?.selfie?.[0]?.path,
        status: "pending",
      },
      { upsert: true, new: true }
    );

    res.json({ message: "KYC submitted", kyc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getProfile = async (req, res) => {
  try {
    const kyc = await Kyc.findOne({ user: req.user._id });
    // Assuming req.user already has profilePhoto from auth middleware
    res.json({ user: req.user, kyc });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

