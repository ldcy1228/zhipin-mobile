import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Main from './containers/main/main'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Login from './containers/login/login';
import Register from './containers/register/register';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
