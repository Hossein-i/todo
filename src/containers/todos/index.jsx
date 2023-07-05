import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/todos";
import TodoFieldComponent from "../../components/todo-field";
import TodosComponent from "../../components/todos";
import TodoComponent from "../../components/todos/todo";

const TodosContainer = () => {
  const [open, setOpen] = useState(true);
  const { todos, createTodo, updateTodo, deleteTodo } =
    useContext(TodosContext);

  const handleCreate = (title) => {
    createTodo(title);
  };
  const handleUpdate = (id, newTodo) => {
    updateTodo(id, newTodo);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="md:max-w-3xl md:mx-auto">
      <div className="m-4 p-4 border border-gray-300">
        <TodoFieldComponent
          open={open}
          onToggle={() => setOpen(!open)}
          onCreate={handleCreate}
        />
        {open && (
          <TodosComponent>
            {todos.map((todo) => (
              <TodoComponent
                key={todo.id}
                {...todo}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </TodosComponent>
        )}
      </div>
    </div>
  );
};

export default TodosContainer;
