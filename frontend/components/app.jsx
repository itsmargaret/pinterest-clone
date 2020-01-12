import React from 'react';
import {AuthRoute} from '../util/route_util';
import NavContainer from './nav/nav_container';
import PinIndexContainer from './pins/pin_index_container';
import PinShowContainer from './pins/pin_show_container';
import UserProfile from './users/user_profile';
import {Switch, Route, Redirect} from 'react-router-dom';
import Error from './error/error';

const App = () => (
    <div>
        {/* <header>
            <NavContainer />
        </header> */}
            <AuthRoute path="/" component={NavContainer} />
        <Switch>
            <Route exact path="/" component={PinIndexContainer} />
            <Route exact path="/pins/:pinId" component={PinShowContainer} />
            <Route exact path="/:userId" component={UserProfile} />
            <Route path='/error' component={Error} />
            <Redirect to='/error' />
        </Switch>
    </div>
);

export default App;