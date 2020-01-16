import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin } from '../../actions/pin_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    pin: state.entities.pins[ownProps.match.params.pinId]
});

const mapDispatchToProps = dispatch => ({
    fetchPin: id => dispatch(fetchPin(id)),
    openModal: (modal, pin) => dispatch(openModal(modal, pin)),
    fetchBoards: id => dispatch(fetchBoards(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);