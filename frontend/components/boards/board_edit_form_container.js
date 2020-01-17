import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import BoardEditForm from './board_edit_form';
import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        // errors: state.errors.session,
        currentUser: state.entities.users[state.session.id],
        board: state.entities.boards[ownProps.location.pathname.split("/")[3]]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBoard: id => dispatch(fetchBoard(id)),
        processForm: (board) => dispatch(updateBoard(board)),
        closeModal: () => dispatch(closeModal()),
        deleteBoard: id => dispatch(deleteBoard(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEditForm));