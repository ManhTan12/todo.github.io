import "./header.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
const Header = ({ headerRef, addTodo, editTodo }) => {
  //redux
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  // headerRef.current = (value) => {
    
  // };
  // useEffect(() => {
  //   setSelect(headerRef.current.value);
  //   setValue(headerRef.current.value);
  // }, [headerRef.current.value])

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
          name: value,
          isComplete: false,
        };

        axiosClient.post('',newTodo)
        .then(res =>{
          let task = {
            ...newTodo,
            id: res.id
          }
          addTodo(task)
        })
        .catch(error =>{
          console.log('Error',error)
        })
        console.log('newTodo', newTodo);
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
  console.log('value value value', value);

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
