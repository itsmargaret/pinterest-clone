import * as BoardUtil from '../util/board_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receiveBoards = boards => ({
    type: RECEIVE_ALL_BOARDS,
    boards,
});

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

const removeBoard = id => ({
    type: REMOVE_BOARD,
    id
});

export const fetchBoards = () => dispatch => (
    BoardUtil.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)))
);

export const fetchBoard = id => dispatch => (
    BoardUtil.fetchBoard(id)
        .then(board => dispatch(receiveBoard(board)))
)

export const createBoard = board => dispatch => (
    BoardUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)))
)

export const updateBoard = board => dispatch => (
    BoardUtil.createBoard(board)
        .then(board => dispatch(receiveBoard(board)))
)

export const deleteBoard = id => dispatch => (
    BoardUtil.deleteBoard(id)
        .then(() => dispatch(removeBoard(id)))
)