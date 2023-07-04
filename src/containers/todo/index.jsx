import TodoFieldComponent from "../../components/todo-field";
import TodosComponents from "../../components/todos";

const TodoContainer = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="m-4 p-4 border border-gray-300">
        <TodoFieldComponent />
        <TodosComponents />
      </div>
    </div>
  );
};

export default TodoContainer;
