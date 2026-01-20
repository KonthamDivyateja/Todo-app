 import express from "express";
import {
  addTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add", addTodo);
router.get("/", getTodos);
router.get("/:todoId", getTodoById);
router.put("/update/:todoId", updateTodo);
router.delete("/delete/:todoId", deleteTodo);

export default router;