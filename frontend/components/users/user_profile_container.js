import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[ownProps.match.params.userId]
    // boards: state.entities.boards
});

const mapDispatchToProps = dispatch => {
    return({
        fetchUser: id => dispatch(fetchUser(id)),
        openModal: modal => dispatch(openModal(modal))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);