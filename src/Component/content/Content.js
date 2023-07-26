import { useState } from "react"
import "./content.css";
//import { useSelector } from "react-redux";
import ViewContainer from "../view/ViewContainer";

const Content = ({
  list,
  typelist,
  setList,
  handleDelete,
  handleCheck,
  onEditList,
  todoLists,
  
}) => {
  const handleEdit = (value) => {
    onEditList(value);
  };

  // const todoLists = useSelector((state) => state.todoLists);
  // const typeList = useSelector((state) => state.typeList);
  //const store = useSelector((state) => state);
  
  // Tạo danh sách công việc hiển thị trên trang hiện tại
  // const renderedTasks = currentTasks.map((task, index) => (
  //   <li key={index}>{task}</li>
  // ));
  return (
    <div className="contain">
      <ul className="contain-ul">
        {todoLists.map((value) => {
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
