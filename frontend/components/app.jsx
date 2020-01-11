import React from 'react';
import NavContainer from './nav/nav_container';
import PinIndexContainer from './pins/pin_index_container';
import {AuthRoute} from '../util/route_util';
import {Switch, Route, Redirect} from 'react-router-dom';
import Error from './error/error';

const App = () => (
    <div>
        {/* <header>
            <NavContainer />
        </header> */}
            <AuthRoute exact path="/" component={NavContainer} />
        <Switch>
            <Route exact path="/" component={PinIndexContainer} />
            {/* <Route exact path="/pins/:pinId" component={PinShowContainer} /> */}
            <Route path='/error' component={Error} />
            <Redirect to='/error' />
        </Switch>
    </div>
);

export default App;