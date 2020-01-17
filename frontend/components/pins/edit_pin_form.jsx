import React from 'react';
import { withRouter } from 'react-router-dom';

class PinEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pin.id);
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
        if (!this.props.pin) return null;

        return (
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="pin-form-box">
                    <div className="board-form-header">
                        <div id="create">Edit this pin</div><div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>
                    {/* {this.renderErrors()} */}
                    <div className="pin-edit-form">
                        <div className="pin-edit-inputs">
                            <label>Title:
                                <input type="text"
                                    placeholder={this.props.pin.title}
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className="board-input"
                                />
                            </label>
                            <label>Note:
                                <textarea
                                    placeholder="Write a note about this pin..."
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    className="board-input"
                                />
                            </label>
                        </div>
                        <img id="pin-pic" src={this.props.pin.imageUrl} alt=""/>
                    </div>
                    <div className="board-modal-buttons">
                        <a className="board-submit" onClick={() => this.props.deletePin(this.props.pin.id).then(this.props.closeModal)}>Delete</a>
                        <button className="board-submit" onClick={() => this.props.closeModal}>Cancel</button>
                        <input className="board-submit" type="submit" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(PinEditForm);
