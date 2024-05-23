import { useState } from "react";
//import addTodo prop
export const TodoForm = ({ addTodo }) => {
  //keep track of what user is typing
  //empty string on initial render
  const [value, setValue] = useState("");
  //need to add finc that captures value when we submit form
  const handleSubmit = (e) => {
    //prevent default
    e.preventDefault();
    addTodo(value);
    setValue(""); //after form submits set value to empty string
  };
  return (
    //need to add finc that captures value when we submit form
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        //get user input with handleChange
        value={value} // value = value in state
        placeholder="name of task"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
