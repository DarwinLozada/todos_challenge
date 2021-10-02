import { createContext, useContext, useReducer } from "react";
import todosReducer from "./reducer";

const initialState = {
  items: [],
};

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default function useTodos() {
  return useContext(TodosContext);
}
