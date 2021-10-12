import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user} = useFirebase();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
            {user?.email &&<Link>Sign Out</Link>}
        </div>
    );
};

export default Header;