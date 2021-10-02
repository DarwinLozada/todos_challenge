import Todo from "../Todo";

export default function TodosList({ items }) {
  return (
    <ul className="items-container">
      {items.map((item) => (
        <Todo key={item.id} data={item} />
      ))}
    </ul>
  );
}
