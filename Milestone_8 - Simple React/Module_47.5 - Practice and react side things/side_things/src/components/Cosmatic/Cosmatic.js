import React from 'react';

const Cosmatic = (props) => {
    const { name, age, email, phone, company } = props.cosmatic;
    return (
        <div style={{border:'2px solid red',margin: '20px',borderRadius: '20px'}}>
            <h4>Name: {name} </h4>
            <h4>Age: {age} </h4>
            <h4>Email: {email} </h4>
            <h4>Phone: {phone} </h4>
            <h4>Company: {company} </h4>
        </div>
    );
};

export default Cosmatic;