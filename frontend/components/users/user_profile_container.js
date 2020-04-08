import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import {fetchBoards} from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => {
    return({
        fetchUser: id => dispatch(fetchUser(id)),
        fetchBoards: id => dispatch(fetchBoards(id)),
        openModal: (modal, pin) => dispatch(openModal(modal, pin))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);