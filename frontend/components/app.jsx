import React from 'react';
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>Pinterest</h1>
            </Link>
            <GreetingContainer />
        </header>
    </div>
);

export default App;