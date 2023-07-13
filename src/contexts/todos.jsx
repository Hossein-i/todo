import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/localStorage";

const TodosContext = React.createContext({
  todos: [{ id: "", title: "", done: false }],
  createTodo: (title) => {},
  updateTodo: (id, newTodo) => {},
  deleteTodo: (id) => {},
});

const TodosContextProvider = ({ children }) => {
  const [todosLS, setTodosLS] = useLocalStorage("todos");
  const [todos, setTodos] = useState(todosLS || []);

  const createTodo = (title) => {
    const id = "id-" + new Date().getTime();

    setTodos((currentTodos) => [...currentTodos, { id, title, done: false }]);
  };
  const updateTodo = (id, newTodo) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, ...newTodo };
        return todo;
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setTodosLS(todos);
  }, [setTodosLS, todos]);

  return (
    <TodosContext.Provider
      value={{ todos, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosContext };
