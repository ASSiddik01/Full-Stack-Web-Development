import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop';

    const googleSingInHandle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="user_form">

            <div>
                <h2>Login</h2>
                <form onsubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New User? <Link to="/register" >Create Account</Link> </p>
                <div>---------or---------</div>
                <button onClick={googleSingInHandle} className="btn-regular" >Google Sing In</button>
            </div>
        </div>
    );
};

export default Login;