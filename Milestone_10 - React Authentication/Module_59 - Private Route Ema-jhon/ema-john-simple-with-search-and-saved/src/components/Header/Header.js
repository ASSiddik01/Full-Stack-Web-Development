import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email ?
                    <button onClick={logOut}>Sign Out</button>
                    :
                    <NavLink to="/login">Sign In</NavLink>}
            </nav>
        </div>
    );
};

export default Header;