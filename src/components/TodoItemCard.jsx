 import { useState } from "react";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const TodoItemCard = ({id,todo}) => {
 
  const [isHover, setIsHover] = useState(false); // State to track hover

  const onHover = () => {
    setIsHover(true); // Set the hover state to true
  };

  const onLeave = () => {
    setIsHover(false); // Set the hover state to false when leaving
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex  shadow-lg w-full rounded-lg overflow-hidden cursor-default ${
        isHover ? " h-full" : "h-10"
      } `}
    >
      <div
        className={`flex ${
          isHover ? "" : "items-center "
        }   bg-white  w-5/6 p-1 px-2`}
      >
        <p className={` ${isHover ? "" : "truncate "}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio, voluptates
        </p>
      </div>

      <div className=" flex w-1/6 ">
        <div className="w-1/2  h-full bg-yellow-400 flex justify-center items-center">
          <EditSharpIcon />
        </div>
        <div className="w-1/2   h-full bg-red-600 flex justify-center items-center">
          <DeleteSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default TodoItemCard;
