import React from "react";
import axiosClient from "../../api/axiosClient";
//import { useEffect, useState } from "react";
import "./view.css";
import {ModalContext} from "../../Theme/ModalContext"


const ViewFake = ({ value, deleteTodo, setTodo, onEdit, editLists }) => {

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
    axiosClient
      .put(`/${id}`, { isComplete: !value.isComplete })
      .then((res) => {
        setTodo(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleConfirYes = async (id) => {
    try {
      closeModal();
      deleteTodo(id);
      await axiosClient.delete(`/${id}`);
      deleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleConfirNo = () => {
  //   closeModal();
  // };

  const handleDelete = (id) => {
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
