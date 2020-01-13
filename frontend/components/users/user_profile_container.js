import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/session_actions';
import {fetchBoards} from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
    // currentUser: state.entities.users[state.session.id]
    currentUser: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => {
    return({
        fetchUser: id => dispatch(fetchUser(id)),
        fetchBoards: () => dispatch(fetchBoards())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);