import express from "express";
import {
  register,
  login,
  logout,
  verify,
} from "../controllers/authController.js";
import authenticateUser from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", authenticateUser, verify);

export default router;
