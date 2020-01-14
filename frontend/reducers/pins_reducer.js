import { RECEIVE_ALL_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';
import { RECEIVE_BOARD, RECEIVE_ALL_BOARDS } from '../actions/board_actions';

const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PINS:
            return action.pins;
        case RECEIVE_PIN:
            newState[action.pin.id] = action.pin
            return newState;
        case RECEIVE_ALL_BOARDS:
            return action.pins;
            // return newState;
        // case RECEIVE_BOARD:
        //     // pins = action.payload.pins;
        //     newState[pins] = action.boards.pins
        //     return newState;
            // return Object.assign({}, state, pins);
            //add
        case REMOVE_PIN:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default pinsReducer;