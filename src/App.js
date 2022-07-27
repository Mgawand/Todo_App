import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Footer } from "./components/Footer";

const data = [
  {
    id: 1,
    content: "Complete js course",
    completed: false,
  },
  {
    id: 2,
    content: "Completed js course",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(data);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [themeLight, setThemeLight] = useState(true);

  const themeClass = themeLight ? "light" : "dark";

  useEffect(() => {
    const handleFilter = () => {
      if (filter === "active") {
        return setFilteredTodos(todos.filter((todo) => !todo.completed));
      } else if (filter === "completed") {
        return setFilteredTodos(todos.filter((todo) => todo.completed));
      } else {
        return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filter]);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filter={filter}
            setFilter={setFilter}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
