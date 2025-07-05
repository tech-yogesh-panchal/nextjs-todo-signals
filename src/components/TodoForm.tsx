"use client";

import { signal } from "@preact/signals-react";
import { todos } from "../signals/todos";
import { useSignals } from "@preact/signals-react/runtime";
import SignalInput from "./SignalInput";

// Single signal for form state
const formState = signal({
  name: "",
  age: "",
  email: "",
});

export default function TodoForm() {
  useSignals();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    formState.value = { ...formState.value, [name]: value };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, age, email } = formState.value;
    if (!name || !age || !email) return;

    todos.value = [
      ...todos.value,
      {
        name,
        age: parseInt(age),
        email,
      },
    ];

    // Reset form
    formState.value = { name: "", age: "", email: "" };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded shadow max-w-md bg-white"
    >
         <SignalInput
        name="name"
        placeholder="Name"
        value={formState.value.name}
        onChange={handleChange}
      />
      <SignalInput
        type="number"
        name="age"
        placeholder="Age"
        value={formState.value.age}
        onChange={handleChange}
      />
      <SignalInput
        type="email"
        name="email"
        placeholder="Email"
        value={formState.value.email}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        name="name"
        placeholder="Name"
        value={formState.value.name}
        onChange={handleChange}
        className="text-black w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formState.value.age}
        onChange={handleChange}
        className="text-black w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formState.value.email}
        onChange={handleChange}
        className="text-black w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}
      <button
        type="submit"
        className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Add
      </button>
    </form>
  );
}
