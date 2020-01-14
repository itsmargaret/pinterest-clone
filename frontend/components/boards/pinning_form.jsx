import React from 'react';
import { withRouter } from 'react-router-dom';

class PinningForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinId: this.props,
            boardId: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.key
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const pinning = Object.assign({}, this.state);
        this.props.processForm(pinning).then(this.props.closeModal);
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
                    Choose board<div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    {/* <img src={this.props.pins[this.state.pinId].imageUrl} /> */}
                    <div className="board-form">
                        {/* <ul>
                            {
                                this.props.userBoards.map(board => (
                                    <li><a key={board.id} onClick={() => this.update('boardId')}>{board.title}</a><input type="submit" value="Save" className="save-button"/></li>
                                ))
                            }
                            <li><a onClick={}>Create board</a></li>
                        </ul> */}
                    </div>
                </form>
            </div>
        );
        
    }
}

export default withRouter(PinningForm);
