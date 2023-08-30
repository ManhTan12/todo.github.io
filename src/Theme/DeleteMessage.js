import React from 'react';
import { useModal } from './ModalContext';

const DeleteMessage = ({ value }) => {
  const { showMessage, confirmDelete } = useModal();

  if (!showMessage) {
    return null;
  }

  return (
    <div className="model-message">
      <div className="model-message-text">
        Đã xoá thành công {value.name}
      </div>
      <button className="modal-but-yes" onClick={confirmDelete}>
        OK
      </button>
    </div>
  );
};

export default DeleteMessage;