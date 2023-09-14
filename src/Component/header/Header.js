import "./header.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import ProductApi from "../../api/productAPI";
const Header = ({ headerRef, addTodo, editTodo,addTask }) => {
  //redux
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  
  const handleSave = () => {
    if (select) {
      // edit
      if(value.trim() !== ''){
        const newTodo = {
          ...select,
          content: value,
        };
        // editTodo(newTodo);
        // setValue("");
        // setSelect("");
        ProductApi.update()
        .then(res =>{
          editTodo(newTodo);
          setValue("");
          setSelect("");
        })
        .catch(error=>{
          console.log('Error', error);
        })
      }
    } else {
      debugger;
      // add
      if(value.trim() !== ''){
        const newTodo = {
          name: value,
          isComplete: false,
        };
        addTask(newTodo);
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
      <button className="header-save" onClick={() => handleSave()}>
        Save
      </button>
    </div>
  );
};
export default Header;
