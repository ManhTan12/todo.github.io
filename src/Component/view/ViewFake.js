import React from "react";
import ProductApi from "../../api/productAPI";
import "./view.css";
import {ModalContext} from "../../Theme/ModalContext"


const ViewFake = ({ value, deleteTodo, setTodo, onEdit, editLists,deleteTasks }) => {

  const {
    openModal,
    closeModal,
    deleteSuccess
  } = React.useContext(ModalContext);

  const handleEdit = (value) => {
    console.log("values", value);
    onEdit(value);
  };

  const handleCheck = async (id) => {
      ProductApi.update()
      .then((res) => {
        setTodo(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleConfirYes = async (id) => {
    debugger
    // try {
    //   closeModal();
    //   deleteTodo(id);
    //   //await axiosClient.delete(`/${id}`);
    //   deleteTasks(id);
    //   deleteSuccess();
    // } catch (error) {
    //   console.log(error);
    // }
    closeModal();
    deleteTasks(id);
    deleteSuccess();
  };

  // const handleConfirNo = () => {
  //   closeModal();
  // };

  const handleDelete = (id) => {
    debugger
    const callback = () => handleConfirYes(id)
    openModal(callback);
  };

  return (
    <React.Fragment>
      <li>
        <div className="content-li">
          <input
            className="checkbox"
            type="checkbox"
            checked={value.isComplete}
            onChange={() => handleCheck(value.id)}
          />
          <div className={value.isComplete ? "completed" : ""}>
            {value.name}
          </div>
          <button
            className="contain-but-edit"
            onClick={() => handleEdit(value)}
          >
            Sửa 
          </button>
          <button className="contain-but-delete" onClick={() => handleDelete(value.id)}>
            Xoá
          </button>
        </div>
      </li>
    </React.Fragment>
  );
};
export default ViewFake;
