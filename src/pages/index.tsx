'use client';
// src/pages/index.tsx
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { todos } from "../signals/todos";

export default function Home() {
  return (
    <main style={{ maxWidth: "500px", margin: "auto", paddingTop: "40px" }}>
      <h1>Todo List with React Signals</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
