import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Log in</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Sign up</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.email}</h2>
            <button className="header-button" onClick={logout}>Log out</button>
        </hgroup>
    );

    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default Greeting;