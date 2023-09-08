import React, { useEffect, useState } from "react";
import "./App.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import TodoItemCard from "./components/TodoItemCard";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const todo = JSON.parse(localStorage.getItem("todoList"));
    return todo ? todo : [];
  });

  const [text, setText] = useState("");
  const [textLimit, setTextLimit] = useState(200);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  const handleInputChange = (e) => {
    if (e.target.value.length <= textLimit) {
      setText(e.target.value);
    }
  };

  const handleTextLeft = () => {
    return textLimit - text.length;
  };

  const handleAddTodo = () => {
    if (text) {
      const newTodo = {
        id: uuidv4(),
        todo: text,
      };
      setTodoList([...todoList, newTodo]);
      setText("");
    }
  };

  return (
    <div className="w-full h-full bg-gray-500">
      <div className="h-screen">
        <div className="flex justify-center w-full ">
          <div className="h-full w-128 bg-red-200 mt-10 rounded-lg p-4 shadow-lg">
            <p className="font-semibold text-xl">To-Do List</p>
            <div className="flex relative my-4 shadow-lg">
              <input
                onChange={handleInputChange}
                value={text}
                type="text "
                className="p-2 w-full rounded-l-lg outline-none"
              />
              <button
                className="bg-red-400 font-semibold p-1 px-2 rounded-r-lg"
                onClick={handleAddTodo}
              >
                ADD
              </button>
              <p className="absolute text-xs right-14 bottom-0">
                {handleTextLeft()}/{textLimit}
              </p>
            </div>
     
            <div className="space-y-2 mt-1">
              {todoList &&
                todoList.map((item) => (
                  <div key={item.id}>
                    <TodoItemCard todo={item.todo} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
