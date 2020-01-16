import { RECEIVE_CURRENT_USER, RECEIVE_USER } from "../actions/session_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user
            return newState;
        default:
            return state;
    }
};