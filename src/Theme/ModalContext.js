import { useState, createContext, useContext } from "react";

const ModalContext =createContext();

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const openModal =() =>{
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    };

      const confirmDelete = () => {
        setShowMessage(true);
    };
    
      const value = {
        showModal,
        openModal,
        closeModal,
        showMessage,
        confirmDelete,
      };

    return(
        <ModalContext.Provider value={value} >
            {children}
        </ModalContext.Provider>
    );
};
export const useModal = () => {
    return useContext(ModalContext);
};