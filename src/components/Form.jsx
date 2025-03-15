"use client";

import React, { useState } from "react";

function Form({ setTodos, showMessage }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();

    if (!value) return; 

    const newTodo = {
      title: value,
      id: self.crypto.randomUUID(),
      is_completed: false,
    };

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Tallennus localStorageen
      return updatedTodos;
    });

    showMessage("Task added successfully ✅"); 

    setInputValue(""); 
  };

  return (
    <form
      className="flex items-center justify-between bg-gray-800 p-4 rounded-md w-full max-w-lg mx-auto shadow-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo" className="w-full">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-500 bg-gray-900 text-white outline-none"
        />
      </label>
      <button
        type="submit"
        className="ml-2 bg-green-500 text-black px-4 py-3 rounded-md hover:bg-green-600 transition"
      >
        ➕
      </button>
    </form>
  );
}

export default Form;
