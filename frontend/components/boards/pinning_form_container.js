import { connect } from 'react-redux';
import PinningForm from './pinning_form';
import { createPinning } from '../../actions/pin_actions';
import {closeModal, openModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'createPinning',
        // currentUser: state.entities.users[state.session.id]
        pin: state.ui.modal.pin,
        userBoards: Object.values(state.entities.boards)
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, pin) => dispatch(openModal(modal, pin)),
        processForm: (pin_id, board_id) => dispatch(createPinning(pin_id, board_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinningForm);