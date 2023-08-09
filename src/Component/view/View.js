import "./view.css";
import { useEffect } from "react";
const View = ({ handleCheck, handleDelete, value, onEdit }) => {
  const handleEdit = (value) => {
    console.log('check valye', value);
    onEdit(value);
  };

  

  return (
    <li key={value.id} >
      <div className="content-li">
        <input
          className="checkbox"
          type="checkbox"
          checked={value.isComplete}
          onChange={() => handleCheck(value.id)}
        />
        <div className={value.isComplete ? "completed" : "abc"} style={{flex: 7}}>
          {value.content}
        </div>
        <button className="contain-but" onClick={() => handleEdit(value)}>
          Sửa
        </button>
        <button className="contain-but" onClick={() => handleDelete(value)}>
          Xoá
        </button>
      </div>
    </li>
  );
};
export default View;
