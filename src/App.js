import { useEffect } from "react";
import "./App.css";
import TodosList from "./components/TodosList";
import useTodos from "./stores/todosStore";
import { SET_ITEMS } from "./stores/todosStore/actions";

const DATA = ["item 1", "item 2", "item 3"];

function App() {
  const { state, dispatch } = useTodos();

  useEffect(() => {
    dispatch({
      type: SET_ITEMS,
      payload: {
        items: DATA,
      },
    });
  }, [dispatch]);

  return (
    <div className="App">
      <TodosList items={state.items} />
    </div>
  );
}

export default App;
