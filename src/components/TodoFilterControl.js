import React from "react";

const TodoFilterControl = ({ filter, setFilter }) => {
  const handleClick = (status) => {
    setFilter(status);
  };
  return (
    <div className="control-btn group">
      <button
        className={filter === "all" ? "btn active" : "btn"}
        onClick={() => handleClick("all")}
      >
        All
      </button>

      <button
        className={filter === "active" ? "btn active" : "btn"}
        onClick={() => handleClick("active")}
      >
        Active
      </button>

      <button
        className={filter === "completed" ? "btn active" : "btn"}
        onClick={() => handleClick("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilterControl;
