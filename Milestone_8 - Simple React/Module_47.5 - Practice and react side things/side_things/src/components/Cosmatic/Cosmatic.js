import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmatic = (props) => {
    const { name, age, email, phone, company } = props.cosmatic;
    const stotageHandaler = name => {
        console.log(name);
        addToDb(name)
    }


    return (
        <div style={{ border: '2px solid red', margin: '20px', borderRadius: '20px', padding: '20px' }}>
            <h4>Name: {name} </h4>
            <h4>Age: {age} </h4>
            <h4>Email: {email} </h4>
            <h4>Phone: {phone} </h4>
            <h4>Company: {company} </h4>
            <button onClick={()=> stotageHandaler(name)} >Add Local Storage</button>
        </div>
    );
};

export default Cosmatic;