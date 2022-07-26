import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/root.style.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { Footer } from "./components/Footer";
import TodoFilterControl from "./components/TodoFilterControl";

function App() {
  const [themeLight, setThemeLight] = useState(true);
  return (
    <div>
      <Header themeLight={themeLight} setThemeLight={setThemeLight} />
      <TodoForm />
      <TodoList />
      <TodoItem />
      <TodoFilterControl />
      <Footer />
    </div>
  );
}

export default App;
