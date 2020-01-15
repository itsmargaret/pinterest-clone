import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            // return action.modal;
            // return {
            //     modal: action.modal,
            //     pin: action.pin,
            // }
            if (action.pin) {
                return {modal: action.modal, pin: action.pin};
            } else {
                return action.modal;
            }
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalReducer;