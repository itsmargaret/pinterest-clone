import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
    return {
        // errors: state.errors.session,
        user_id: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardForm));