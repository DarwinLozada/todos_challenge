import { useState } from "react";
import Todo from "../Todo";

export default function TodosList({ items }) {
  const [text, setText] = useState("");

  const renderItems = items.filter((item) => item.name.includes(text));

  return (
    <div className="todo_list">
      <div className="todo_list__search_input">
        <label htmlFor="search-item">Search</label>
        <input
          type="text"
          id="search-item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <ul className="todo_list__items">
        {renderItems.map((item) => (
          <Todo key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}
