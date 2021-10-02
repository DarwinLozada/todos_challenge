import { useEffect } from "react";
import "./App.css";
import useTodos from "./stores/todosStore";
import { SET_ITEMS } from "./stores/todosStore/actions";

const DATA = ["item 1", "item 2", "item 3"];

function App() {
  const { items, dispatch } = useTodos();

  useEffect(() => {
    dispatch({
      type: SET_ITEMS,
      payload: {
        items: DATA,
      },
    });
  });

  return (
    <div className="App">
      <ul className="items-container">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
