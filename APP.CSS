import React, { useState } from "react";
import "./App.css";
import { FiPlus } from "react-icons/fi";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos,{ id: Math.random(),text: task,completed: false }]);
    setTask("");
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t));
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const remaining = todos.filter((t) => !t.completed).length;

  const handleSelectTask = (e) => {
    const {value} = e.target;
    setTask(value);

  };
  return (
    <div className="app">
      <div className="todo-card">
        <h2>Your To Do</h2>
        <div className="input-box">
          <input
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={handleSelectTask}
          />
          <button onClick={addTodo}>
            <FiPlus />
          </button>
        </div>
        <div className="list">
          {todos.map((t) => (
            <div className="item" key={t.id}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTodo(t.id)}
              />
              <span className={t.completed ? "done" : ""}>
                {t.text}
              </span>
              <button onClick={() => deleteTodo(t.id)}>✕:)</button>
            </div>
          ))}
        </div>
        <p className="footer">
          {remaining} remaining tasks :)
        </p>
      </div>
    </div>
  );
};

export default App;
