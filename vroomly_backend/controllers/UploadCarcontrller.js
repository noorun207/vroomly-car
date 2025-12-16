// controllers/carController.js
import Car from "../modals/Carmodal.js";

export const addCar = async (req, res) => {
  try {
    const car = await Car.create({
      owner: req.user._id,
      ...req.body,
    });

    res.status(201).json({
      success: true,
      car,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
