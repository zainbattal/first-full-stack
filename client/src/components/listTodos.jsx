import React, { useEffect, useState } from "react";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://first-full-stack-1.onrender.com/todos"
      );
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  console.log(todos);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <h3>List todos</h3>
      <ol>
        {todos.map((todo) => (
          <li
            onClick={async (e) => {
              const name = todo.id;
              console.log(name);
              const deleteTodo = await fetch(
                `https://first-full-stack-1.onrender.com/todos/${name}`,
                {
                  method: "DELETE",
                }
              );
              location.reload();
            }}
            key={todo.id}
          >
            <p>{todo.name}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
