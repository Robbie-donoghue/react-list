import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//single Todo
//prop task to pass in value from the TodoWrapper
export const Todo = ({ task, toggleComplete, deleteTodo }) => {
  //display Todos when added
  return (
    <div className="Todo">
      {/* //grey out text and tha when clicked with toggleComplete prop */}
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        {/* //add delete as onclick */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
