import { useModal } from "./ModalContext";

const Modal = () => {
  const { showModal, closeModal } = useModal();

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-title">
        <p>Xoá người dùng này?</p>
        <button className="modal-x" onClick={() => closeModal()}>
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
