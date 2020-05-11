import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import PrivateZone from './guards/PrivateZone';
import Home from './containers/Home/Home';
import Header from './components/Header';
const App = () => {
    return (<BrowserRouter>
        <Header />
        <Switch>
            <Route path='/login' component={Login} exact />
            <Route path='/register' component={Register} exact />
            <PrivateZone>
                <Route path='/' component={Home} exact />
            </PrivateZone>
        </Switch>
    </BrowserRouter>);
}

export default App;