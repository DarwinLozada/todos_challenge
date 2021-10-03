import useTodos from "../../stores/todosStore";
import {
  CHECK_ITEM,
  REMOVE_ITEM,
  UNCHECK_ITEM,
} from "../../stores/todosStore/actions";

export default function Todo({ data }) {
  const { name, isCompleted } = data;

  const { dispatch } = useTodos();

  const handleCheck = () => {
    dispatch({
      type: isCompleted ? UNCHECK_ITEM : CHECK_ITEM,
      payload: data,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: REMOVE_ITEM,
      payload: data,
    });
  };

  return (
    <li className={`todo-item ${isCompleted && "todo-item--completed"}`}>
      <button onClick={handleCheck}>{isCompleted ? "Uncheck" : "check"}</button>
      <span
        className={`todo_item__text ${
          isCompleted && "todo_item__text--completed"
        }`}
      >
        {name}
      </span>
      <button className="todo_item__delete_button" onClick={handleDelete}>
        X
      </button>
    </li>
  );
}
