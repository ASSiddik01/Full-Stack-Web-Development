import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <span>{price}</span>
            <p>{description}</p>
            <Link to={`/booking/${id}`}><button className='btn btn-warning'>Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;