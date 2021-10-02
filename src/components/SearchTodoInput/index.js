import { useState } from "react";
import useTodos from "../../stores/todosStore";
import { FILTER_ITEMS } from "../../stores/todosStore/actions";

export default function SearchTodoInput() {
  const [text, setText] = useState("");

  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: FILTER_ITEMS,
      payload: text,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-item">Seach</label>
      <input
        type="text"
        id="search-item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </form>
  );
}
