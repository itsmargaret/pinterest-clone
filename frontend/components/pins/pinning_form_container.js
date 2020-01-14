import { connect } from 'react-redux';
import PinningForm from './pin_form';
import { createPinning } from '../../actions/pin_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'createPin',
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (pin) => dispatch(createPin(pin))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinForm);