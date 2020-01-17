import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PinEditForm from './edit_pin_form';
import { withRouter } from 'react-router-dom';
import {updatePin, deletePin, fetchPin} from '../../actions/pin_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        pin: state.ui.modal.pin,
        boards: Object.values(state.entities.boards)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (pin) => dispatch(updatePin(pin)),
        deletePin: (id) => dispatch(deletePin(id)),
        closeModal: () => dispatch(closeModal()),
        fetchPin: (id) => dispatch(fetchPin(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinEditForm));