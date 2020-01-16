import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    currentUser: state.entities.users[ownProps.match.params.userId],
    pins: state.entities.pins 
});

const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);