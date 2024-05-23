import { TodoForm } from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
export const TodoWrapper = () => {
  //need to pass value from TodoForm to other components, create the state in the parent component, this one! -> use props to pass the state from TodoForm to TodoWrapper
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    //spread opp to make copy
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
    </div>
  );
};
