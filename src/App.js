import TodosContainer from "./containers/todos";
import { TodosContextProvider } from "./contexts/todos";

function App() {
  return (
    <div className="">
      <div className="pt-20">
        <h1 className="text-5xl font-extralight text-center">Todo App</h1>
      </div>
      <TodosContextProvider>
        <TodosContainer />
      </TodosContextProvider>
    </div>
  );
}

export default App;
