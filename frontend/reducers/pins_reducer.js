import { RECEIVE_ALL_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';
import {RECEIVE_ALL_BOARDS, RECEIVE_BOARD } from '../actions/board_actions';
import {merge } from 'lodash';

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
        case RECEIVE_BOARD:
            return merge({}, state, action.pins);
        case REMOVE_PIN:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default pinsReducer;