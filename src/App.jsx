import React, { useState } from "react";
import "./App.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import TodoItemCard from "./components/TodoItemCard";
import TodoList from "./components/TodoList";
import Cookies from 'js-cookie';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [textLimit, setTextLimit] = useState(100);
  const [isHover, setIsHover] = useState(false); // State to track hover

  const handleInputChange = (e) => {
    if (e.target.value.length <= textLimit) {
      console.log(text.length);
      setText(e.target.value);
    }
  };

  const handleTextLeft = () => {
    return textLimit - text.length;
  };

  const handleAddTodo =()=>{
    
  }

  return (
    <div className="w-full h-full bg-gray-500">
      <div className="h-screen">
        <div className="flex justify-center w-full ">
          <div className="h-full w-128 bg-red-200 mt-10 rounded-lg p-4 shadow-lg">
            <p className="font-semibold text-xl">To-Do List</p>
            <div className="flex relative my-4">
              <input
                onChange={handleInputChange}
                value={text}
                type="text "
                className="p-2 w-full rounded-l-lg outline-none"
              />
              <button className="bg-red-400 font-semibold p-1 px-2 rounded-r-lg" onClick={handleAddTodo}>
                ADD
              </button>
              <p className="absolute text-xs right-14 bottom-0">
                {handleTextLeft()}/{textLimit}
              </p>
            </div>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
