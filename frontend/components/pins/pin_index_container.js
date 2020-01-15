import {fetchPins, fetchPin} from '../../actions/pin_actions';
import {connect} from 'react-redux';
import PinIndex from './pin_index';
import { openModal } from '../../actions/modal_actions';
import modal from '../modal/modal';

const mSTP = state => ({
    pins: Object.values(state.entities.pins),
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()), 
    fetchPin: id => dispatch(fetchPin(id)), 
    fetchBoards: id => dispatch(fetchBoards(id)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(PinIndex);