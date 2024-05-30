import create from "zustand";
export const useTodo = create((set) => ({
  todos: [
    { id: 1, title: "Learn JS" },
    { id: 1, title: "Learn React" },
  ],
  addTodo: (title) =>
    set((state) => {
      const newTodo = { id: 3, title };
      return { todos: [...state.todos, newTodo] };
    }),
}));
