import React from 'react';

const Service = (props) => {
    const { name, price, description, img } = props.service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <span>{price}</span>
            <p>{description}</p>
        </div>
    );
};

export default Service;