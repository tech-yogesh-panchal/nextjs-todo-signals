"use client";

import { useSignals } from "@preact/signals-react/runtime";
import { todos } from "../signals/todos";
// import { todos } from "../signals/todos";
import { useComputed } from "@preact/signals-react";

export default function TodoList() {
  // ✅ Subscribe to signal reactively
  useSignals();
  const handleDelete = (index: number) => {
    const updated = [...todos.value];
    updated.splice(index, 1);
    todos.value = updated;
  };
  console.log("TodoList rendered", todos.value);

  return (
    <div className="mt-6 max-w-md space-y-4 text-black">
      {todos.value.length === 0 ? (
        <p className="text-gray-500">No todos yet.</p>
      ) : (
        <ul className="space-y-2">
          {todos.value.map((todo, index) => (
            <li
              key={index}
              className="p-4 border rounded shadow bg-white flex justify-between items-start"
            >
              <div>
                <p className="font-semibold">Name: {todo.name}</p>
                <p>Age: {todo.age}</p>
                <p>Email: {todo.email}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
