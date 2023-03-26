export const TodoListItem = (props) => {
  return (
    <li className={props.item.isCompleted ? "isCompleted" : ""}>
      <input
        type="checkbox"
        checked={props.item.isCompleted}
        onChange={(event) => props.handleTaskChange(event, props.item)}
      />
      {props.item.description}
    </li>
  );
};
