
import "./view.css";
// import { ACTION_TYPE } from "../../redux/reducer";


const ViewFake = ({ value, deleteTodo,setTodo,onEdit }) => {
  
  const handleEdit = (value) => {
    onEdit(value);
  };

  const handleCheck = (id) => {
    setTodo(id)
  };

  const handleDelete = (id) => {
    deleteTodo(id);
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
        <button className="contain-but" onClick={() => handleEdit(value)}>Sửa</button>
        <button className="contain-but" onClick={() => handleDelete(value.id)}>
          Xoá
        </button>       
      </div>
      
    </li>
    
  );
};
export default ViewFake;
