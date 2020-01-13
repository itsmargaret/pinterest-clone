import React from 'react';
import {AuthRoute} from '../util/route_util';
import NavContainer from './nav/nav_container';
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from './pins/pin_show_container';
import UserProfileContainer from './users/user_profile_container';
import {Switch, Route, Redirect} from 'react-router-dom';
import Error from './error/error';

const App = () => (
    <div>
            <AuthRoute path="/" component={NavContainer} />
        <Switch>
            <Route path="/pins/:pinId" component={PinShowContainer} />
            {/* <Route path="/:userId/pins" component={UserPinProfile} /> */}
            <Route path="/:userId/boards" component={UserProfileContainer} />
            <Route path="/:userId" component={UserProfileContainer} />
            <Route path="/" component={PinIndexContainer} />
            <Route path='/error' component={Error} />
            <Redirect to='/error' />
        </Switch>
    </div>
);

export default App;