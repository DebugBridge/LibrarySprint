/* eslint-disable arrow-body-style */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
// import axios from 'axios';
// import Book from './components/book/Book';
// import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </>
    );
};

export default App;
