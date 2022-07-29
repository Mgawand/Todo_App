import React, { useState } from "react";
import IconCheck from "../images/icon-check.svg";
import IconCross from "../images/icon-cross.svg";

const TodoItem = ({ todo, index, setTodos, todos }) => {
  const [mutableTodo, setMutableTodo] = useState(todo);
  const classes = mutableTodo.completed ? "completed" : "";
  const checkIcon = mutableTodo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
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
          type="checkbox"
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
        <div className="remove-btn">
          <button className="remove" onClick={() => removeTodo(index)}>
            <img src={IconCross} alt="remove" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
