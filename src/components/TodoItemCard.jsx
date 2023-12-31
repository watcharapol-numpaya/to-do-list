import { useEffect, useRef, useState } from "react";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveAsIcon from "@mui/icons-material/SaveAs";

const TodoItemCard = ({ data, onDelete, onSaveEdit,onCheck  }) => {
  const [isHover, setIsHover] = useState(false);  
  const [isEditing, setIsEditing] = useState(false);  
  const [editedText, setEditedText] = useState(data.todo);  
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const onHover = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  const handleDeleteTodo = () => {
    onDelete(data.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onSaveEdit(data.id, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(data.todo);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleCheckBox = ()=>{
    onCheck(data.id,!data.isFinish)
  }

  return (
    <div className={`flex shadow-lg w-full rounded-lg overflow-hidden cursor-default ${   isHover ? "h-auto" : "" } `}  >
        <div className=" flex justify-center bg-gray-100 w-1/12">
        <input className="" onChange={handleCheckBox}  type="checkbox" checked={data.isFinish}/>
      </div>
      <div onMouseEnter={onHover} onMouseLeave={onLeave}  className={`flex ${   isHover ? "bg-gray-200" : ""  } bg-white w-9/12 p-2 px-2`} >
 
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editedText}
            onChange={handleTextChange}
            className="w-full outline-none"
          />
        ) : (
          <p className={`${isHover ? "" : "truncate"} ${data.isFinish?"line-through decoration-red-600":""}   `}>{data.todo}</p>
        )}
      </div>

      <div className="flex w-2/12">
        {isEditing ? (
          <>
            <div
              className="w-1/2 h-full bg-green-400 flex justify-center items-center cursor-pointer"
              onClick={handleSaveEdit}
            >
              <SaveAsIcon />
            </div>{" "}
            <div
              className="w-1/2 h-full bg-yellow-400 flex justify-center items-center cursor-pointer"
              onClick={handleCancel}
            >
              <CancelIcon />
            </div>
          </>
        ) : (
          <>
            <div
              className="w-1/2 h-full bg-yellow-400 flex justify-center items-center cursor-pointer"
              onClick={handleEdit}
            >
              <EditSharpIcon />
            </div>
            <div
              onClick={handleDeleteTodo}
              className="w-1/2 h-full bg-red-600 flex justify-center items-center cursor-pointer"
            >
              <DeleteSharpIcon />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItemCard;
