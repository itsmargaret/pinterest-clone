import { fetchBoards, fetchBoard } from '../../actions/board_actions';
import { connect } from 'react-redux';
import BoardIndex from './board_index';

const mSTP = state => ({
    boards: Object.values(state.entities.boards)
});

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards())
});

export default connect(mSTP, mDTP)(BoardIndex);