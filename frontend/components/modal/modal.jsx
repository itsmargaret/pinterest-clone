import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SessionFormContainer from '../session_form/session_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
    let component;
    switch (modal) {
        case 'login':
            component = <SessionFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            component = <SessionFormContainer />;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="session-modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);