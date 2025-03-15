"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2000); 
  };

  return (
    <div className="relative space-y-6">
 
            <div
        className={`fixed top-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-600 ${
          message ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {message}
      </div>

      <Header />
      <TODOHero todos={todos} />
      <Form setTodos={setTodos} showMessage={showMessage} />
      <TODOList todos={todos} setTodos={setTodos} showMessage={showMessage} />
    </div>
  );
}
