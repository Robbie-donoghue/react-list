import { TodoForm } from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
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
      <h1> React list</h1>
      <TodoForm addTodo={addTodo} />
      {/* // generate todo for each value in state */}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};
