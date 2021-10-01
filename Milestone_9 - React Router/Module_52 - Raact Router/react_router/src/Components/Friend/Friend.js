import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const { name, phone, email, website, address } = props.friend;
    return (
        <div className='friend'>
            <h2>Name: {name} </h2>
            <p>Phone: {phone} </p>
            <p>Email: {email} </p>
            <p>Website: {website}</p>
            <p>Address: {address.city}</p>
        </div>
    );
};

export default Friend;