import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import BoardModal from './modal/board_modal';
import NavContainer from './nav/nav_container';
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from './pins/pin_show_container';
import PinFormContainer from './pins/pin_form_container';
import UserProfileContainer from './users/user_profile_container';
// import UserProfile from './users/user_profile';
import {Switch, Route, Redirect} from 'react-router-dom';
import Error from './error/error';

const App = () => (
    <div>
            <AuthRoute path="/" component={NavContainer} />
            <BoardModal />
        <Switch>
            <ProtectedRoute path="/pins/:pinId" component={PinShowContainer} />
            <ProtectedRoute path="/pin-builder" component={PinFormContainer} />
            <ProtectedRoute path="/:userId" component={UserProfileContainer} />
            <Route path='/error' component={Error} />
            <ProtectedRoute path="/" component={PinIndexContainer} />
            <Redirect to='/error' />
        </Switch>
    </div>
);

export default App;