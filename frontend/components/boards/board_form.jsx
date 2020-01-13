import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            userId: this.props.currentUser
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const board = Object.assign({}, this.state);
        this.props.processForm(board).then(this.props.closeModal);
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
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    Create board <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="board-form">
                        <label>Name:
                        <input type="text"
                                placeholder='Like "Places to Go" or "Recipes to Make"'
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="board-input"
                            />
                        </label>
                    </div>
                        <button onClick={this.props.closeModal}>Cancel</button>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(BoardForm);
