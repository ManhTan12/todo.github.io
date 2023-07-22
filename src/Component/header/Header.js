import "./header.css";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Header = ({ onSaveList,handleSaveEdit, headerRef}) =>{
  //redux

  const dispatch = useDispatch();

  const [value,setValue] = useState('')
  const [select, setSelect] = useState("");
  headerRef.current = (value) =>{
    setSelect(value)
    setValue(value.content)
  }
  const handleSave = () => {
    // debugger;
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
        ...select,
        id: nanoid(),
        content: value,
        isComplete: false,
      }
      onSaveList(newTodo);
      setValue('');
      setSelect('')
    }
  };
  const handleAdd = () => {
    const newTodo = {
      id: nanoid(),
      content: value,
      isComplete: false,
    }
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setValue('');
  }
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
        // onClick={() =>
        //   handleSave({ id: nanoid(), content: value, isComplete: false })
        // }
        onClick={handleAdd}
      >
        Save
      </button>
    </div>
  );
}
export default Header;
