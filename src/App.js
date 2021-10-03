import { useEffect } from "react";
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
    <div className="App">
      <div className="app_container">
        <h1 className="app_title">Get things done!</h1>
        <main className="todos_wrapper">
          <TodoInput />
          <TodosList items={state.items} />
        </main>
      </div>
    </div>
  );
}

export default App;
