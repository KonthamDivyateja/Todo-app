import { readDB, writeDB } from "../models/todo.model.js";

/* CREATE TODO */
export const addTodo = (req, res) => {
  try {
    const db = readDB();
    const newTodo = { id: Date.now(), ...req.body };

    db.todos.push(newTodo);
    writeDB(db);

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to add todo" });
  }
};

/* GET ALL TODOS */
export const getTodos = (req, res) => {
  try {
    const db = readDB();
    res.status(200).json(db.todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

/* GET SINGLE TODO */
export const getTodoById = (req, res) => {
  try {
    const db = readDB();
    const todo = db.todos.find(t => t.id == req.params.todoId);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

/* UPDATE TODO */
export const updateTodo = (req, res) => {
  try {
    const db = readDB();
    const index = db.todos.findIndex(t => t.id == req.params.todoId);

    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    db.todos[index] = { ...db.todos[index], ...req.body };
    writeDB(db);

    res.status(200).json(db.todos[index]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

/* DELETE TODO */
export const deleteTodo = (req, res) => {
  try {
    const db = readDB();
    const filtered = db.todos.filter(t => t.id != req.params.todoId);

    if (filtered.length === db.todos.length) {
      return res.status(404).json({ error: "Todo not found" });
    }

    db.todos = filtered;
    writeDB(db);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};