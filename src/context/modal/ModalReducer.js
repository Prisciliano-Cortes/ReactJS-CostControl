import { typesModal } from "../../utils/typesState";

export const ModalReducer = (state, action) => {
    switch (action.type) {
        case typesModal.OPEN_MODAL:
            return {
                ...state,
                modalForm: true
            }
        
        case typesModal.CLOSE_MODAL:
            return {
                ...state,
                modalForm: false
            }
    
        default:
            return state
    }
}