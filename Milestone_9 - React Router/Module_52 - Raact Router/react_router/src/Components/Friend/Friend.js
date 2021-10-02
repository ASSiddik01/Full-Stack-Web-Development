import React from 'react';
import { Link,   } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, phone, email, website, address } = props.friend;
    return (
        <div className='friend'>
            <h2>Name: {name} </h2>
            <p>Phone: {phone} </p>
            <p>Email: {email} </p>
            <p>Website: {website}</p>
            <p>Address: {address.city}</p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
        </div>
    );
};

export default Friend;