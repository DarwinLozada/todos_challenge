import { useState } from "react";
import useTodos from "../../stores/todosStore";
import { ADD_ITEM } from "../../stores/todosStore/actions";

export default function AddTodoInput() {
  const [text, setText] = useState("");

  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_ITEM,
      payload: text,
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="input_wrapper add-todo">
      <label htmlFor="add-todo" className="input_label">
        Add todo
      </label>
      <input
        type="text"
        id="add-todo"
        value={text}
        className="input_label"
        onChange={(e) => setText(e.target.value)}
      ></input>
    </form>
  );
}
