import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from '../../hook/useFirebase';

const Header = () => {
    const {user} = useFirebase();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
            {user?.displayName && <button>Log Out</button>}
            
        </div>
    );
};

export default Header;