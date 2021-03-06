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
        this.props
          .processForm(board)
          .then(this.props.closeModal);
        //   .then(this.props.history.push(`/${this.props.user_id}`));
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    <div className="board-form-header">
                        <div id="create">Create board</div><div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>
                    {/* {this.renderErrors()} */}
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
                    <div className="board-modal-buttons">
                        <button className="board-submit" onClick={this.props.closeModal}>Cancel</button>
                        <input className="board-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(BoardForm);
