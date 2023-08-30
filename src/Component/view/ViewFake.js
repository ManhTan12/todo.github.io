import axiosClient from "../../api/axiosClient";
import { useEffect, useState } from "react";
import "./view.css";
import { useModal } from "../../Theme/ModalContext";
import { ModalProvider } from "../../Theme/ModalContext";
import Modal from "../../Theme/Modal";
import DeleteMessage from "../../Theme/DeleteMessage";

const ViewFake = ({ value, deleteTodo, setTodo, onEdit, editLists }) => {
  const { openModal, closeModal } = useModal();

  const handleEdit = (value) => {
    console.log("values", value);
    onEdit(value);
  };

  const handleCheck = async (id) => {
    debugger;
    axiosClient
      .put(`/${id}`, { isComplete: !value.isComplete })
      .then((res) => {
        setTodo(id);
      })
      .catch((error) => {
        console.log(error);
      });
    debugger;
  };

  const handleConfirYes = async (id) => {
    try {
      await axiosClient.delete(`/${id}`);
      deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirNo = () => {
    closeModal();
  };

  const handleDelete = () => {
    openModal(
      <div className="view-modal">
        <div className="modal">
          <div className="modal-title">
            <p>Xoá người dùng này?</p>
            <button className="modal-x" onClick={() => closeModal()}>
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
            <button className="modal-but-no" onClick={() => handleConfirNo()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ModalProvider>
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
          <button className="contain-but-delete" onClick={() => handleDelete()}>
            Xoá
          </button>
        </div>
      </li>
      <Modal /> 
      <DeleteMessage value={value} /> 
    </ModalProvider>
  );
};
export default ViewFake;
