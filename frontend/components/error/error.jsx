import React from 'react';

const Error = ({ location: { pathname } }) => (
    <section>
        <h1>Sorry, that page doesn't exist.</h1>
        <a href="https://pinterest-aa.herokuapp.com/">Go Back</a>
    </section>
);

export default Error;