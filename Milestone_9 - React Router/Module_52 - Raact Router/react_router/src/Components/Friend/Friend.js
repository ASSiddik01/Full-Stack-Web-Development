import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, phone, email, website, address } = props.friend;
    const history = useHistory()

    const clickHandler = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div className='friend'>
            <h2>Name: {name} </h2>
            <p>Phone: {phone} </p>
            <p>Email: {email} </p>
            <p>Website: {website}</p>
            <p>Address: {address.city}</p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br />

            <Link to={`/friend/${id}`}>
                <button > Button Visit</button>
            </Link>
            <br />
            <button onClick={clickHandler}> Handler Visit</button>
        </div>
    );
};

export default Friend;