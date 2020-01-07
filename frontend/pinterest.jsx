import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    //FOR TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TEST END
    ReactDOM.render(<Root store={store} />, root);
});