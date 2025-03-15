"use client";
import React from "react";

function TODOHero({ todos }) {
  const completedTasks = todos.filter((todo) => todo.is_completed).length;
  const totalTasks = todos.length;

  return (
    <section className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg shadow-md">
      <div>
        <p className="text-lg font-semibold">Task Done</p>
        <p className="text-sm text-gray-400">Keep it up</p>
      </div>
      <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full text-xl font-bold">
        {completedTasks}/{totalTasks}
      </div>
    </section>
  );
}

export default TODOHero;
