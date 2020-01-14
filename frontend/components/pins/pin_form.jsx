import React from 'react';
import { withRouter } from 'react-router-dom';

class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            description: '',
            authorId: this.props.currentUser.id
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
        const pin = Object.assign({}, this.state);
        this.props.processForm(pin);
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
        const username = this.props.currentUser.email.split("@")[0] 

        return (
            <div className="pin-form-container">
                <form onSubmit={this.handleSubmit} className="pin-form-box">
                    {/* add dropdown with user boards */}
                    <input type="submit" value="Save" className="session-submit" />
                    {this.renderErrors()}
                    <div className="pin-form">
                        <input type="text"
                                placeholder="Add your title"
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="pin-input"
                        />
                        <img className="profile-icon" src={this.props.currentUser.imageUrl} /> {username} <br/>
                        <input type="text"
                            placeholder="Tell everyone what your Pin is about"
                            value={this.state.description}
                            onChange={this.update('description')}
                            className="pin-input"
                        />
                        <input type="text"
                            placeholder="Add a destination link"
                            value={this.state.url}
                            onChange={this.update('url')}
                            className="pin-input"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(PinForm);