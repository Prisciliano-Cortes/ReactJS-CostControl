import { useReducer } from "react";
import { ModalReducer } from "./ModalReducer";
import { ModalContext } from "./modalContext";
import { initialStateModal } from "../../utils/initialState";
import { typesModal } from "../../utils/typesState";

export const ModalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ModalReducer, initialStateModal);

    const openModal = () => {
        dispatch({ type: typesModal.OPEN_MODAL })
    }

    const closeModal = () => {
        dispatch({ type: typesModal.CLOSE_MODAL })
    }

    return (
        <ModalContext.Provider  value={{
            ...state,
            openModal,
            closeModal  
        }}>
            { children }
        </ModalContext.Provider>
    )
}