import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import {
  createTask,
  getTasks,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();
router.use(authenticateUser); 

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);

export default router;
