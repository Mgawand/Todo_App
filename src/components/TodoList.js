import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";

const TodoList = ({ filteredTodos, todos, setTodos, filter, setFilter }) => {
  const [leftCount, setLeftCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftCount(unCompletedTodos.length);
  }, [todos]);

  const textPlacer = filter === "completed" ? "Completed Task" : "Pending Task";

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilter("all");
  };
  return (
    <>
      <section className="todo-list-container">
        {filteredTodos.length < 1 ? (
          <p className="info-text">No {textPlacer}</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <div className="todo-filter-control">
          <div className="todos-count">{leftCount} items left</div>

          <div className="control-btn group filter-contol-for-desktop">
            <TodoFilterControl filter={filter} setFilter={setFilter} />
          </div>
          <div>
            <button className="control-btn" onClick={clearCompletedTodos}>
              Clear
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
