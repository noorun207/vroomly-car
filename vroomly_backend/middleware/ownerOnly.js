// middleware/roleMiddleware.js
export const sellerOnly = (req, res, next) => {
  if (req.user.role !== "seller") {
    return res.status(403).json({ message: "Only sellers can upload cars" });
  }
  next();
};
