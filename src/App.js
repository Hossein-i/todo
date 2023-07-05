import TodoContainer from "./containers/todo";
import { TodosContextProvider } from "./contexts/Todos";

function App() {
  return (
    <div className="">
      <div className="pt-20">
        <h1 className="text-5xl font-extralight text-center">Todo App</h1>
      </div>
      <TodosContextProvider>
        <TodoContainer />
      </TodosContextProvider>
    </div>
  );
}

export default App;
