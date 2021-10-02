import { useReducer } from "react";
import todosReducer from "./reducer";

const initialState = {
  items: [],
};

export default function useTodos() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return {
    state,
    dispatch,
  };
}
