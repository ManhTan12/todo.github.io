import "./header.css";
import { nanoid } from "nanoid";
import { useState } from "react";

const Header = ({ onSaveList,select,setSelect, handleSaveEdit, headerRef}) =>{
  const [value, setValue] = useState("");
  
  
  const handleSave = () => {
    if(select){
      // edit
      const newTodo = {
        ...select,
        content: value,
      }
      handleSaveEdit(newTodo);
      setValue('');
      setSelect('');
    }else{
      // add
      const newTodo = {
        id: nanoid(),
        content: value,
        isComplete: false,
      }
      onSaveList(newTodo);
      setValue('');
    }
  };

  

  return (
    <div className="wrapper-header" >
      <input
        ref={headerRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter work"
      />
      <button
        className="header-but"
        onClick={() =>
          handleSave({ id: nanoid(), content: value, isComplete: false })
        }
      >
        Save
      </button>
    </div>
  );
}
export default Header;
