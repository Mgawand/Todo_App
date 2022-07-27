import React, { useState } from "react";

const idGenerate = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (event) => {
    setTodoInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoInput) {
      const newTodo = {
        id: idGenerate(todos),
        content: todoInput.trim(),
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };
  return (
    <div className="form-container">
      <div className="checkbox-border">
        <span className="checkbox"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          id="todoInput"
          type="text"
          name="todo-input"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
        <button id="submitNewTodo" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
