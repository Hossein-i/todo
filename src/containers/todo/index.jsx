import TodoFieldComponent from "../../components/todo-field";
import TodosComponent from "../../components/todos";
import TodoComponent from "../../components/todos/todo";

const TodoContainer = () => {
  return (
    <div className="md:max-w-3xl md:mx-auto">
      <div className="m-4 p-4 border border-gray-300">
        <TodoFieldComponent />
        <TodosComponent>
          <TodoComponent />
          <TodoComponent />
          <TodoComponent />
        </TodosComponent>
      </div>
    </div>
  );
};

export default TodoContainer;
