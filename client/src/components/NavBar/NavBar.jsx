/* eslint-disable arrow-body-style */
import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div data-cy='header' className='header'>
            <h1>SDI Library Page </h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;
