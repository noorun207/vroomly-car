import express from "express";
import { signup} from "../controllers/signupController.js";
import { login } from "../controllers/LoginContrller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
