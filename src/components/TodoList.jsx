import React from "react";
import TodoItemCard from "./TodoItemCard";


const TodoList = ({}) => {

  return (
    <div className="space-y-1 mt-1">
      <TodoItemCard />
      <TodoItemCard />
      <TodoItemCard />
    </div>
  );
};

export default TodoList;
