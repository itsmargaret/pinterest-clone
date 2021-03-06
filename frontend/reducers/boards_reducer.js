import {RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
import {RECEIVE_ALL_PINS} from './pins_reducer';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_BOARDS:
            return action.boards;
        case RECEIVE_ALL_PINS:
            return action.boards;
        // case RECEIVE_CURRENT_USER: 
        //     newState[action.boards.id] = action.boards;
        //     return newState;
        case RECEIVE_BOARD:
            newState[action.board.id] = action.board;
            return newState; 
        case REMOVE_BOARD:
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default boardsReducer;