import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.location.pathname.split("/")[3])
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (!this.props.board) return null;

        // console.log(this.props);
        return (
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    <div className="board-form-header">
                        <div id="create">Edit your board</div><div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>
                    {this.renderErrors()}
                    <div className="board-form">
                        <label>Name:
                        <input type="text"
                                placeholder={this.props.board.title}
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="board-input"
                            />
                        </label>
                    </div>
                    <div className="board-modal-buttons">
                        <a className="board-submit" onClick={() => this.props.deleteBoard(this.props.board.id).then(this.props.closeModal).then(() => this.props.history.push(`/${this.props.currentUser.id}/boards`))}>Delete</a>
                        <button className="board-submit" onClick={() => this.props.closeModal}>Cancel</button>
                        <input className="board-submit" id="edit-save" type="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(BoardEditForm);
