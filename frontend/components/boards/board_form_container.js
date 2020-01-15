import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Create',
        currentUser: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);