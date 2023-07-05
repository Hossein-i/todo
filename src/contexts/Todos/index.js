import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/localStorage";

const TodosContext = React.createContext({
  todos: [{ id: "", title: "", done: false }],
  createTodo: (newTodo) => {},
  updateTodo: (id, newTodo) => {},
  deleteTodo: (id) => {},
});

const TodosContextProvider = ({ children }) => {
  const [todosLS, setTodosLS] = useLocalStorage("todos");
  const [todos, setTodos] = useState(todosLS || []);

  const createTodo = (newTodo) => {
    const id = "id-" + new Date().getTime();
    const newTodos = [...todos, { ...newTodo, id }];
    setTodos(newTodos);
  };
  const updateTodo = (id, newTodo) => {
    const newTodos = [...todos, { ...newTodo, id }];
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const filteredTodos = todos.filteredTodos((todo) => todo.id !== id);
    setTodos(filteredTodos);
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

export { TodosContext, TodosContextProvider };
