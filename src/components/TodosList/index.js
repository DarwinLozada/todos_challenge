import { useState } from "react";
import Todo from "../Todo";

export default function TodosList({ items }) {
  const [text, setText] = useState("");

  const renderItems = items.filter((item) => item.name.includes(text));

  return (
    <div className="todo_list">
      <div className="input_wrapper todo_list__search_input">
        <label htmlFor="search-item" className="input_label">
          Search
        </label>
        <input
          type="text"
          id="search-item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <ul className="todo_list__items">
        {renderItems.length > 0 ? (
          renderItems.map((item) => <Todo key={item.id} data={item} />)
        ) : (
          <p className="todo_list__items__no-todos">There are no todo's to do 🥳</p>
        )}
      </ul>
    </div>
  );
}
