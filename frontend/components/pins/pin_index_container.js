import {fetchPins, fetchPin} from '../../actions/pin_actions';
import {connect} from 'react-redux';
import PinIndex from './pin_index';

const mSTP = state => ({
    pins: Object.values(state.entities.pins)
});

const mDTP = dispatch => ({
    fetchPins: () => dispatch(fetchPins()), 
    fetchPin: id => dispatch(fetchPin(id))
});

export default connect(mSTP, mDTP)(PinIndex);