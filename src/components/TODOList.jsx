"use client";

import React from "react";

function TODOList({ todos, setTodos, showMessage }) {
  const toggleComplete = (id, isCompleted) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );

    if (!isCompleted) {
      showMessage("Task marked as completed ✅");
    } else {
      showMessage("Task restored 🔄");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); 
      return updatedTodos;
    });

    showMessage("Task deleted successfully ❌");
  };

  return (
    <ol className="todo_list space-y-4">
      {todos && todos.length > 0 ? (
        todos.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleComplete={() => toggleComplete(item.id, item.is_completed)}
            deleteTodo={() => deleteTodo(item.id)}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

function Item({ item, toggleComplete, deleteTodo }) {
  return (
    <li
      className={`flex justify-between items-center p-4 border border-gray-500 rounded-lg transition-all ${
        item.is_completed ? "opacity-50" : ""
      }`}
    >
      <button
        className="todo_items_left flex items-center space-x-2"
        onClick={toggleComplete}
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill={item.is_completed ? "#22C55E" : "#0d0d0d"} />
        </svg>
        <p className={item.is_completed ? "line-through text-gray-400" : ""}>
          {item.title}
        </p>
      </button>
      <div className="todo_items_right flex items-center space-x-4">
        <button onClick={toggleComplete} className="text-green-400">
          ✏️
        </button>
        <button onClick={deleteTodo} className="text-red-500">
          🗑️
        </button>
      </div>
    </li>
  );
}

export default TODOList;
