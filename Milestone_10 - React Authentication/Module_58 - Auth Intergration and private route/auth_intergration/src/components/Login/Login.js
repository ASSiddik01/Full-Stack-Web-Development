import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const { signInUsingGoogle,signInUsingGithub } = useFirebase();
    return (
        <div>
            <h2>Please! Sign In</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}>Github Sign In</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;