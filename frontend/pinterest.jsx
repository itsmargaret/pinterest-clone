import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchBoards} from './actions/board_actions';
import {fetchPins} from './actions/pin_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //FOR TESTING
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchBoards = fetchBoards;
    window.fetchPins = fetchPins;
    //TESTING END

    ReactDOM.render(<Root store={store} />, root);
});