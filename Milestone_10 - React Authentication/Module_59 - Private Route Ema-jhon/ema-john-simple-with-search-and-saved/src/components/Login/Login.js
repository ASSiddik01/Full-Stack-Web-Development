import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login_form">
            <div>
                <h2>Sign In</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New User?<Link to='/register'> Create New Account</Link> </p>
                <div>-------------or-------------</div>
                <button className="btn-regular" onClick={signInUsingGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;