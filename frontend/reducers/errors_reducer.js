import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import boardsErrorsReducer from './boards_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer, 
    boards: boardsErrorsReducer
});

export default errorsReducer;