import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        // this.loginUser = this.loginUser.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    loginUser(user) {
        this.props.processForm(user)
    }

    demoLogin() {
        const user = {
            email: 'demo@email.com', 
            password: '123456'
        }
        this.setState(user);
        this.loginUser(user);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul className="errors">
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
                    {/* <div className="header-link">P</div> */}
                    <img className="header-link" src="https://pinterest-clone-aa-seeds.s3-us-west-1.amazonaws.com/apple-touch-icon.png" alt=""/>
                    <div id="welcome">Welcome to Pun-terest</div> 
                    <div id="slogan">Pun-believable...</div> 
                    <br/>
                    {this.renderErrors()}
                    <div className="login-form">
                        <input type="text" placeholder="email" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        {this.props.formType === 'Log in' ? (<button className="session-submit" onClick={this.demoLogin}>Demo Login</button>) : ''}
                        <div id="other-link">{this.props.otherLink}</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
