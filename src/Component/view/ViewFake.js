import { useDispatch, useSelector } from "react-redux";
import "./view.css";

const ViewFake = ({ value }) => {
  const todoLists = useSelector((state) => state.todoLists);
  
  const dispatch = useDispatch()
  const handleCheck = (id) => {
    const newList = [...todoLists];
    const index = newList.findIndex((value) => value.id === id);
    newList[index] = {
      ...newList[index],
      isComplete: !newList[index].isComplete,
    };
    dispatch({type: 'SET_TODO', payload: newList})
    
    // setCurrentList(newList)
  };

  const handleDelete =(id) =>{
    const newList = todoLists.filter((todo) => todo.id !== id);
    dispatch({type: 'DELETE_TODO', payload: newList})
  }
  

  return (
    <li  >
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
        <button className="contain-but" >
          Sửa
        </button>
        <button className="contain-but" onChange={() => handleDelete(value.id)}>
          Xoá
        </button>
      </div>
    </li>
  );
};
export default ViewFake;
