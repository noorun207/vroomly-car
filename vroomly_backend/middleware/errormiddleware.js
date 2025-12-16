export const errorHandler = (err, req, res, next) => {
  console.log("ERROR:", err.message);

  return res.status(500).json({
    success: false,
    message: err.message || "Server Error",
  });
};
