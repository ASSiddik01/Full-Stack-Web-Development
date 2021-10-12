import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please! Sign Up</h2>
            <form>
                <input type="text" />
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <Link to="/login">Already Register</Link>
        </div>
    );
};

export default Register;