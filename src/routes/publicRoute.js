import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Layout>
            <Route
                {...rest}
                render={props => <Component {...props} />}
            />
        </Layout>
    )
}

export default PublicRoute;
