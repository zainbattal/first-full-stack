const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// process.env.PORT

// middleware
app.use(cors());
app.use(express.json());

// add a todo

app.get("/", (req, res) => {
  res.send("backend running");
});

app.post("/todos", async (req, res) => {
  try {
    const { discreption } = req.body;
    const name = await pool.query(
      "INSERT INTO users (name) VALUES($1) RETURNING *",
      [discreption]
    );
    res.json(name.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM users");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a single todo

app.get("/todos:id", async (req, res) => {
  const { id } = req.params;
  const getTodo = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(getTodo.rows[0]);
});

// delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const action = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.json("todo was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

// upsate a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { discreption } = req.body;
    const { id } = req.params;
    const update = await pool.query(
      "UPDATE users SET name = $1 WHERE id = $2",
      [discreption, id]
    );
    res.json("todo updated!");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
