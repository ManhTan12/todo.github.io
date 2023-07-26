import { useDispatch, useSelector } from "react-redux";
import "./view.css";
import { ACTION_TYPE } from "../../redux/reducer";


const ViewFake = ({ value, deleteTodo, todoLists }) => {
  const handleCheck = (id) => {
    const newList = [...todoLists];
    const index = newList.findIndex((value) => value.id === id);
    newList[index] = {
      ...newList[index],
      isComplete: !newList[index].isComplete,
    };
  };

  const handleDelete = (id) => {
    const newList = todoLists.filter((todo) => todo.id !== id);
    deleteTodo(newList);
  };
  
  return (
    <li>
      <div className="content-li">
        <input
          className="checkbox"
          type="checkbox"
          checked={value.isComplete}
          onChange={() => handleCheck(value.id)}
        />
        <div className={value.isComplete ? "completed" : ""}>
          {value.content}
        </div>
        <button className="contain-but">Sửa</button>
        <button className="contain-but" onClick={() => handleDelete(value.id)}>
          Xoá
        </button>       
      </div>
      
    </li>
    
  );
};
export default ViewFake;