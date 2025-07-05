import { signal } from '@preact/signals-react';

export type Todo = {
  name: string;
  age: number;
  email: string;
};

export const todos = signal<Todo[]>([]);