import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please! Sign Up</h2>
            <form>
                <input type="email"></input>
                <br />
                <input type="password"></input>
            </form>
            <Link to='/login'>Already Sign Up</Link>
        </div>
    );
};

export default Register;