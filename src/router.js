import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Control from './pages/control'
import Login from './pages/login'

const Router = () => {
    const routes = [
        {
            path: '/control',
            component: Control,
            exact: false
        },
        {
            path: '/login',
            component: Login,
            exact: true
        }
    ]
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => (
                    <Route{...route} key={route.path} />
                ))}
                <Redirect to={routes[0].path} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

