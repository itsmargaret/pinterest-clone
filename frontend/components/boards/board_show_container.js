import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, fetchBoards } from '../../actions/board_actions';
import {openModal} from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    currentUser: state.entities.users[ownProps.match.params.userId],
    pins: state.entities.pins 
});

const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id)),
    fetchBoards: id => dispatch(fetchBoards(id)),
    openModal: (modal, pin) => dispatch(openModal(modal, pin))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));