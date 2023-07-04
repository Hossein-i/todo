import TodoFieldComponent from "../../components/todo-field";
import TodosComponent from "../../components/todos";

const TodoContainer = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="m-4 p-4 border border-gray-300">
        <TodoFieldComponent />
        <TodosComponent />
      </div>
    </div>
  );
};

export default TodoContainer;
