import React, { useState } from "react";
import IconCheck from "../images/icon-check.svg";

const TodoItem = ({ todo, setTodos, todos }) => {
  const [mutableTodo, setMutableTodo] = useState(todo);
  const classes = mutableTodo.completed ? "completed" : "";
  const checkIcon = mutableTodo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed });
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <li className={classes}>
        <label htmlFor={`todoCheckbox-${todo.id}`}>Completed checkbox</label>
        <input
          type="Checkbox"
          id={`todoCheckbox=${todo.id}`}
          name="completed"
          defaultChecked={mutableTodo.completed}
        />
        <div className="checkbox-border">
          <span className="checkbox" onClick={toggleCompleted}>
            {checkIcon}
          </span>
        </div>
        <p>{mutableTodo.content}</p>
      </li>
    </>
  );
};

export default TodoItem;
