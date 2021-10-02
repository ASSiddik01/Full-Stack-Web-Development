import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/friends'>Friends</NavLink>
            <NavLink to='/about/culture'>Culture</NavLink>
        </nav>
    );
};

export default Header;