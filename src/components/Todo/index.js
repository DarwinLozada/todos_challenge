export default function Todo({ data }) {
  return (
    <li className="todo">
      {data}
      <button>X</button>
    </li>
  );
}
