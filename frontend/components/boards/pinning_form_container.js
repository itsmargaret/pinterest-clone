import { connect } from 'react-redux';
import PinningForm from './pinning_form';
import { createPinning } from '../../actions/board_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'createPinning',
        currentUser: state.entities.users[state.session.id],
        pins: state.entities.pins,
        // userBoards: state.entities.boards
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (id) => dispatch(createPinning(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinningForm);