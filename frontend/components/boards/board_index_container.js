import { fetchBoards } from '../../actions/board_actions';
import { connect } from 'react-redux';
import BoardIndex from './board_index';

const mSTP = state => {
    return({
        boards: Object.values(state.entities.boards),
        pins: state.entities.pins
    })
};

const mDTP = dispatch => ({
    fetchBoards: id => dispatch(fetchBoards(id))
});

export default connect(mSTP, mDTP)(BoardIndex);