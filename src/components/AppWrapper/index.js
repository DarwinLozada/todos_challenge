import App from "../../App";
import { TodosProvider } from "../../stores/todosStore";

export default function AppWrapper({ children }) {
  return (
    <div className="App">
      <TodosProvider>
        <App />
      </TodosProvider>
    </div>
  );
}
