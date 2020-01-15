import React from 'react';
import { withRouter } from 'react-router-dom';
import { faPlusCircle, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PinningForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinId: this.props.pin.id,
            boardId: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(id) {
        this.setState({ boardId: id }, this.handleSubmit)
    }

    handleSubmit(e) {
        // e.preventDefault();
        const pin_id = this.state.pinId 
        const board_id = this.state.boardId
        this.props.processForm(pin_id, board_id).then(this.props.closeModal);

    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="pinning-form-container">
                <form onSubmit={this.handleSubmit} className="pinning-form-box">
                    <div className="board-form-header">
                        Choose board<div onClick={this.props.closeModal} className="close-x">X</div>
                        {this.renderErrors()}
                    </div>
                    <div className="pinning-form">
                        <img src={this.props.pin.imageUrl} />
                        <ul>
                            {
                                this.props.userBoards.map(board => (
                                    <li><a onClick={() => this.update(board.id)}>{board.title}<button id="save"><FontAwesomeIcon icon={faThumbtack} /><span>Save</span></button></a></li>
                                ))
                            }
                            <li><a id="create-button" onClick={() => this.props.openModal('createBoard', null)}><FontAwesomeIcon icon={faPlusCircle} id="plus" />Create board</a></li>
                        </ul>
                    </div>
                </form>
            </div>
        );
        
    }
}

export default withRouter(PinningForm);
