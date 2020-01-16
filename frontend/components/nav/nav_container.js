import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({

        currentUser: state.entities.users[state.session.id]
    })
    // currentUser: state.session.id
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);