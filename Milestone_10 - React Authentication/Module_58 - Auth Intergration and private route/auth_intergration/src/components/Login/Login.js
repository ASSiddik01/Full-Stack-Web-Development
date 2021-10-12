import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useFirebase();
    return (
        <div>
            <h2>Please! Sing In</h2>
            <button onClick={signInUsingGoogle} >Google Sing In</button>
            <br />
            <button onClick={signInUsingGithub} >Github Sing In</button>
            <br />
            <br />
            <Link to="/register">New User</Link>
        </div>
    );
};

export default Login;