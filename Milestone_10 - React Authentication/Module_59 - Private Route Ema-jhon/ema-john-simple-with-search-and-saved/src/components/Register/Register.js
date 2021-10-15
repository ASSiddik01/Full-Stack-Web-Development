import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="user_form">
            <div>
                <h2>Sign Up</h2>
                <form onsubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already register? <Link to="/login">Please! Sing In</Link> </p>
                <div>---------or---------</div>
                <button className="btn-regular" >Google Sing In</button>
            </div>
        </div>
    );
};

export default Register;