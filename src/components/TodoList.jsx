import React, { useEffect, useState } from "react";
import TodoItemCard from "./TodoItemCard";

const TodoList = ({}) => {
  const [todoList, setTodoList] = useState(() => {
    const todo = JSON.parse(localStorage.getItem("todoList"));
    return todo ? todo : [];
  });

  // useEffect(() => {
  //   const storedTodoList = localStorage.getItem("todoList");
  //   // console.log(storedTodoList)
  //   if (storedTodoList) {
  //     setTodoList(JSON.parse(storedTodoList));
  //   }
  // }, []);

  return (
    <div className="space-y-1 mt-1">{todoList &&
      todoList.map((item) => (
        <div key={item.id}>
          <TodoItemCard todo={item.todo} />
        </div>
      ))}
    
    </div>
  );
};

export default TodoList;
