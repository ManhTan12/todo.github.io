import "./view.css";


const View = ({
  handleCheck,
  handleDelete,
  value,
  onEdit
}) => {
  const handleEdit = (value) => {
    onEdit(value)
  };

  

  return (
    <li key={value.id}>
      <>
        <input
          className="checkbox"
          type="checkbox"
          checked={value.isComplete}
          onChange={() => handleCheck(value.id)}
        />
        <div
          className={value.isComplete ? "completed" : ""}
        >
          {value.content}
        </div>
        <button className="contain-but" onClick={() => handleEdit(value)}>
          Sửa
        </button>
        <button className="contain-but" onClick={() => handleDelete(value)}>
          Xoá
        </button>
      </>
    </li>
  );
};
export default View;
