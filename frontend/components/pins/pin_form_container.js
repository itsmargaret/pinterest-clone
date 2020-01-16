import { connect } from 'react-redux';
import PinForm from './pin_form';
import {createPin} from '../../actions/pin_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'createPin',
        currentUser: state.entities.users[1],
        boards: Object.values(state.entities.boards)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBoards: (id) => dispatch(fetchBoards(id)),
        processForm: (pin) => dispatch(createPin(pin)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinForm);