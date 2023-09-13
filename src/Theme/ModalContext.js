import { useState, createContext, useContext } from "react";

export const ModalContext = createContext({
  showModal: () => null,
  openModal: () => null,
  closeModal: () => null,
  showMessage: () => null,
  deleteSuccess: () => null,
});

let callback = () => null;

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [transform, setTransform] = useState(false);
  const openModal = (_callback) => {
    callback = _callback;
    setShowModal(true);
  };

  const closeModal = () => {
    callback = () => null;
    setShowModal(false);
  };

  const deleteSuccess = () => {
    setShowMessage(true);
    setTimeout(() =>{
        setTransform(true);
        setTimeout(()=>{
            setTransform(false);
            setShowMessage(false);
        },3000);
    },500);
  };

  const value = {
    showModal,
    openModal,
    closeModal,
    showMessage,
    deleteSuccess,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {showModal ? (
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
              <button className="modal-but-yes" onClick={callback}>
                OK
              </button>
              <button className="modal-but-no" onClick={() => closeModal()}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {
        showMessage ? (
            <div className="model-message">
                <div className="model-message-text">Đã xoá thành công</div>
            </div>
        ): null
      }
    </ModalContext.Provider>
  );
};
