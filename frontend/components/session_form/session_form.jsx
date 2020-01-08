import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    login() {
 
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                {this.props.otherForm}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="header-link">P</div>
                    <div id="welcome">Welcome to Pinterest</div> 
                    <div id="slogan">Find new ideas to try</div> 
                    <br/>
                    {this.renderErrors()}
                    <div className="login-form">
                        <input type="text" placeholder="email" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <button className="session-submit" onClick={this.login}>Demo Login</button>
                        <div id="other-link">{this.props.otherLink}</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
