import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/Todos";
import TodoFieldComponent from "../../components/todo-field";
import TodosComponent from "../../components/todos";
import TodoComponent from "../../components/todos/todo";

const TodoContainer = () => {
  const [open, setOpen] = useState(true);
  const { todos, createTodo } = useContext(TodosContext);

  const handleCreate = (title) => {
    createTodo(title);
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
              <TodoComponent key={todo.id} {...todo} />
            ))}
          </TodosComponent>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
