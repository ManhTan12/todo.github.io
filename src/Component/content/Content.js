import { useState } from "react"
import "./content.css";
import { useSelector } from "react-redux";
import ViewContainer from "../view/ViewContainer";

const Content = ({
  typelist,
  handleCheck,
  onEditList,
  todoLists,
  typeList,
  currentTasks
}) => {
  const handleEdit = (value) => {
    onEditList(value);
  };
  
  
  // const todoLists = useSelector((state) => state.todoLists);
  // const typeList = useSelector((state) => state.typeList);
  //const store = useSelector((state) => state);
  return (
    <div className="contain">
      <ul className="contain-ul">
        {currentTasks?.map((value) => {
           if (typelist === ''|| value.isComplete === typelist) {
          return (
            //   <View value={value}  handleDelete={handleDelete}
            //  list={list} setList={setList} />
            <ViewContainer handleCheck={handleCheck} onEdit={handleEdit} key={value.id} value={value} />
          );
           }
        })}
      </ul>
    </div>
  );
};

export default Content;
