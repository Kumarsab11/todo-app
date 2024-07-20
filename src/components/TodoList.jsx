import React from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handelComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handelComplete(todo)}
            >
              <FaCheck
                style={{ color: "#ff6c6c", fontSize: "24px" }}
                title="Check"
              />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <FaEdit
                style={{
                  color: "#e2d029",
                  fontSize: "24px",
                  paddingLeft: "10px",
                }}
                title="Edit"
              />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <FaTrash
                style={{ fontSize: "24px", paddingLeft: "10px" }}
                title="Trash"
              />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
