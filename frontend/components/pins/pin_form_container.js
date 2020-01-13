import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinForm from './pin_form';
import {createPin} from '../../actions/pin_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'createPin',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (pin) => dispatch(createPin(pin)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinForm);