import React, { Component } from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Control from './pages/control'
import Login from './pages/login'
export default class router extends Component {
    constructor() {
        super()
        this.routes = [
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
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this.routes.map((route) => (
                        <Route{...route} key={route.path} />
                    ))}
                    <Redirect to={this.routes[0].path} />
                </Switch>
            </BrowserRouter>
        )
    }
}
