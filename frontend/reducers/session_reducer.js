import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {closeModal} from '../actions/modal_actions'

export default (state = { id: null }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            closeModal();
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
            return { id: null };
        default:
            return state;
    }
};