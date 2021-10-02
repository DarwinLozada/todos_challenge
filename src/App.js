import { useEffect } from "react";
import "./App.css";
import TodoInput from "./components/AddTodoInput";
import TodosList from "./components/TodosList";
import useTodos from "./stores/todosStore";
import { SET_ITEMS } from "./stores/todosStore/actions";

const DATA = [
  {
    name: "item 1",
    id: 1,
    isCompleted: false,
  },
  {
    name: "item 2",
    id: 2,
    isCompleted: true,
  },
  {
    name: "item 3",
    id: 3,
    isCompleted: false,
  },
];

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
    <>
      <TodoInput />
      <TodosList items={state.items} />
    </>
  );
}

export default App;
