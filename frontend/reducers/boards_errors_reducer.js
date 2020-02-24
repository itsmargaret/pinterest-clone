import { RECEIVE_BOARD,
  RECEIVE_BOARD_ERRORS
} from "../actions/board_actions";
import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD:
      return _nullErrors;
    case RECEIVE_BOARD_ERRORS:
      return action.errors;
    case OPEN_MODAL:
      return _nullErrors;
    case CLOSE_MODAL:
      return _nullErrors;
    default:
      return state;
  }
};
