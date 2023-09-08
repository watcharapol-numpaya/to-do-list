import React, { useEffect, useState } from "react";
import TodoItemCard from "./components/TodoItemCard";
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

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (text) {
      const newTodo = {
        id: uuidv4(),
        todo: text,
        isFinish:false
      };
      setTodoList([...todoList, newTodo]);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const handleSaveEdit = (id, newTodo) => {
    const newTodoList = todoList.map((todo) => {
      return todo.id === id ? { ...todo, todo: newTodo } : todo;
    });
    setTodoList(newTodoList);
  };

const handleCheckBox = (id,isFinish)=>{
  const updateTodoListStatus = todoList.map((todo) => {
    return todo.id === id ? { ...todo, isFinish: isFinish } : todo;
  });
  setTodoList(updateTodoListStatus);
}

  return (
    <div className="w-full h-full bg-gray-500">
      <div className="h-screen">
        <div className="flex justify-center w-full ">
          <div className="h-full w-128 bg-red-200 mt-10 rounded-lg p-4 shadow-lg">
            <p className="font-semibold text-xl">To-Do List</p>
            <form
              className="flex relative my-4 shadow-lg"
              onSubmit={handleAddTodo}
            >
              <input
              placeholder="Add New Task"
                onChange={handleInputChange}
                value={text}
                type="text "
                className="p-2 w-full rounded-l-lg outline-none"
              />
              <button
                type="submit"
                className="bg-green-400 font-semibold p-1 px-2 rounded-r-lg"
              >
                ADD
              </button>
              <p className="absolute text-xs right-14 bottom-0">
                {handleTextLeft()}/{textLimit}
              </p>
            </form>

            <div className="space-y-2 mt-1">
              {todoList &&
                todoList.toReversed().map((item) => (
                  <div key={item.id}>
                    <TodoItemCard
                      data={item}
                      onDelete={handleDeleteTodo}
                      onSaveEdit={handleSaveEdit}
                      onCheck={handleCheckBox}
      
                    />
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
