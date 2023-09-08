import { useState } from "react";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const TodoItemCard = ({ data ,onDelete }) => {
  const [isHover, setIsHover] = useState(false); // State to track hover

  const onHover = () => {
    setIsHover(true); // Set the hover state to true
  };

  const onLeave = () => {
    setIsHover(false); // Set the hover state to false when leaving
  };

const handleDeleteTodo =()=>{
  onDelete(data.id)
}
  

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex  shadow-lg w-full rounded-lg overflow-hidden cursor-default ${
        isHover ? " h-auto" : " "
      } `}
    >
      <div
        className={`flex ${
          isHover ? "bg-gray-200" : "  "
        }   bg-white  w-5/6 p-2 px-2`}
      >
        <p className={` ${isHover ? "" : "truncate "}`}>{data.todo}</p>
      </div>

      <div className=" flex w-1/6 ">
        <div className="w-1/2  h-full bg-yellow-400 flex justify-center items-center cursor-pointer">
          <EditSharpIcon />
        </div>
        <div onClick={handleDeleteTodo} className="w-1/2 h-full bg-red-600 flex justify-center items-center cursor-pointer">
          <DeleteSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default TodoItemCard;
