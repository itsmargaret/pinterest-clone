import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {myFunction} from '../dropdown/dropdown';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        // <nav className="login-signup">
        //     <button onClick={() => openModal('login')}>Log in</button>
        //     &nbsp;or&nbsp;
        //     <button onClick={() => openModal('signup')}>Sign up</button>
        // </nav>
        <Modal />
    );

    const personalGreeting = () => {
        const username = currentUser.email.split("@")[0]

        return(
            <hgroup className="header-group">
                <Link to="/" className="header-link">
                    <h1>P</h1>
                </Link>
                <nav className="right-nav">
                    <ul className="nav-button">
                        <li>
                            <Link to="/">
                                <button>Home</button>
                            </Link>
                        </li>
                        <li>
                            <button>Following</button>
                        </li>
                        <li>
                            <button>{username}</button>
                        </li>
                        <li className="dropdown">
                            <button onClick={() => myFunction()} className="dropbtn"><FontAwesomeIcon icon={faEllipsisH} /></button>
                            <ul id="myDropdown" className="dropdown-content">
                                <button onClick={logout}>Log out</button>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </hgroup>
        )
        
    };

    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default Greeting;