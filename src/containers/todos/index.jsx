import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import TodoFieldComponent from "../../components/todo-field";
import TodosComponent from "../../components/todos";
import TodoComponent from "../../components/todos/todo";
import TabsComponent from "../../components/tabs";

const TodosContainer = () => {
  const [open, setOpen] = useState(true);
  const { todos, createTodo, updateTodo, deleteTodo } =
    useContext(TodosContext);
  const leftItems = [...todos].filter((todo) => !todo.done).length;
  const [filter, setFilter] = useState("All");

  const handleCreate = (title) => {
    createTodo(title);
  };
  const handleUpdate = (id, newTodo) => {
    updateTodo(id, newTodo);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handleDeleteCompleted = () => {
    const ids = [...todos].map((todo) => (todo.done ? todo.id : undefined));
    ids.forEach((id) => handleDelete(id));
  };
  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    <div className="md:max-w-3xl md:mx-auto">
      <div className="m-4 p-4 border border-gray-600">
        <TodoFieldComponent
          open={open}
          onToggle={() => setOpen(!open)}
          onCreate={handleCreate}
        />
        {open && (
          <>
            <TodosComponent>
              {todos
                .filter((todo) => {
                  if (filter === "Active") return !todo.done;
                  else if (filter === "Done") return todo.done;
                  else return todo;
                })
                .map((todo) => (
                  <TodoComponent
                    key={todo.id}
                    {...todo}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                  />
                ))}
            </TodosComponent>
            <div className="flex justify-between">
              <div className="border border-gray-600 p-2 flex items-center">
                <p>
                  {todos.length > 0 ? (
                    <>
                      {leftItems > 0 ? leftItems + " left item" : "All done!"}
                    </>
                  ) : (
                    <>Empty!</>
                  )}
                </p>
              </div>
              <TabsComponent
                active={filter}
                tabs={["All", "Active", "Done"]}
                onChange={handleFilter}
              />
              <div>
                <button
                  className="p-2 border border-gray-600"
                  onClick={handleDeleteCompleted}
                >
                  Clear done
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodosContainer;
