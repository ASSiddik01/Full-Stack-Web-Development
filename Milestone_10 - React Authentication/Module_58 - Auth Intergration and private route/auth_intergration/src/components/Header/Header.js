import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from '../../hook/useFirebase';

const Header = () => {
    const {user,logout} = useFirebase();
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
            {user?.displayName && <p>User: {user.displayName} </p>}
            {user?.displayName && <button onClick={logout}>Log Out</button>}
            
        </div>
    );
};

export default Header;