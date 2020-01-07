import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return _nullErrors;
        default:
            return state;
    }
};