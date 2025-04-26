import { useState } from "react";

import "./App.css";
// conmponents
import Input from "./components/inputTodo";
import ListTodos from "./components/listTodos";

function App() {
  return (
    <>
      <Input />
      <ListTodos />
    </>
  );
}

export default App;
