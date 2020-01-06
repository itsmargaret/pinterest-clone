import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    //FOR TESTING
    window.signup = signup;
    window.login = login; 
    window.logout = logout;
    //TEST END
    ReactDOM.render(<h1>Pinterest</h1>, root);
});