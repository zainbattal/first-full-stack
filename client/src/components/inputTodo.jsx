import React, { useState, useRef } from "react";

export default function Input() {
  const [discreption, setDiscreption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { discreption };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
      setDiscreption("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h3>Todo list</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          autoFocus
          value={discreption}
          onChange={(e) => {
            setDiscreption(e.target.value);
          }}
        />
        <button className="addBtn">add</button>
      </form>
    </>
  );
}
