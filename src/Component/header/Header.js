import "./header.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const Header = ({ headerRef, addTodo, editTodo }) => {
  //redux
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  headerRef.current = (value) => {
    setSelect(value);
    setValue(value.content);
  };

  const handleSave = () => {
    if (select) {
      // edit
      if(value.trim() !== ''){
        const newTodo = {
          ...select,
          content: value,
        };
  
        editTodo(newTodo);
        setValue("");
        setSelect("");
      }
    } else {
      
      // add
      if(value.trim() !== ''){
        const newTodo = {
          ...select,
          id: nanoid(),
          content: value,
          isComplete: false,
        };
        addTodo(newTodo);
        setValue("");
        setSelect("");
      }
      
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="wrapper-header">
      <input
        ref={headerRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter work"
      />
      <button className="header-save" onClick={() => handleSave({ id: nanoid(), content: value, isComplete: false })}>
        Save
      </button>
    </div>
  );
};
export default Header;
