import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
            <Link>Sign Out</Link>
        </div>
    );
};

export default Header;