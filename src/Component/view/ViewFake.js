import axiosClient from "../../api/axiosClient";
import { useEffect, useState } from "react";
import "./view.css";
import { isCompositeComponent } from "react-dom/test-utils";

const ViewFake = ({ value, deleteTodo, setTodo, onEdit, editLists }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleEdit = (value) => {
    console.log("values", value);
    onEdit(value);
  };

  const handleCheck = async (id) => {
    debugger;
    axiosClient.put(`/${id}`,{isComplete: !value.isComplete})
    .then(res => {
      setTodo(id);
    })
    .catch(error =>{
      console.log(error);
    })
    debugger;
  };

  const handleX = () => {
    setShowModal(false);
  };
  const handleConfirNo = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirYes = async (id) => {
    setShowModal(false);
    setShowMessage(true);
    try {
      await axiosClient.delete(`/${id}`);
      deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
    
    
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
        <div className={value.isComplete ? "completed" : ""}>{value.name}</div>
        <button className="contain-but-edit" onClick={() => handleEdit(value)}>
          Sửa
        </button>
        <button className="contain-but-delete" onClick={() => handleDelete()}>
          Xoá
        </button>
        {showModal && (
          <div className="view-modal">
            <div className="modal">
              <div className="modal-title">
                <p>Xoá người dùng này?</p>
                <button className="modal-x" onClick={() => handleX()}>
                  x
                </button>
              </div>
              <p className="modal-body">Bạn có chắc chắn muốn xoá?</p>
              <div className="modal-but">
                <button
                  className="modal-but-yes"
                  onClick={() => handleConfirYes(value.id)}
                >
                  OK
                </button>
                <button
                  className="modal-but-no"
                  onClick={() => handleConfirNo()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {showMessage && (
          <div className="model-message">
            <div className="model-message-text">Đã xoá thành công {value.name}</div>
          </div>
        )}
      </div>
    </li>
  );
};
export default ViewFake;
