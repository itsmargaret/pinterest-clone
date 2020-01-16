import {fetchPins, fetchPin, fetchUserPins} from '../../actions/pin_actions';
import {connect} from 'react-redux';
import PinIndex from './pin_index';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    pins: Object.values(state.entities.pins),
    boards: Object.values(state.entities.boards),
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()), 
    fetchUserPins: id => dispatch(fetchUserPins(id)),
    fetchPin: id => dispatch(fetchPin(id)), 
    fetchBoards: id => dispatch(fetchBoards(id)),
    openModal: (modal, pin) => dispatch(openModal(modal, pin))
});

export default connect(mSTP, mDTP)(PinIndex);