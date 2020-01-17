import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from '../boards/board_form_container';
import PinningFormContainer from '../boards/pinning_form_container';
import BoardEditFormContainer from '../boards/board_edit_form_container';

function BoardModal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal || modal) {
        case 'createBoard':
            component = <BoardFormContainer />;
            break;
        case 'createPinning':
            component = <PinningFormContainer  />;
            break;
        case 'editBoard':
            component = <BoardEditFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="board-modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal,
    pin: state.pin
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardModal);