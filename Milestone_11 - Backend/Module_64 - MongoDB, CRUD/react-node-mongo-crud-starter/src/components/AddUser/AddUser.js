import React, { useRef } from 'react';

const AddUser = () => {

    const nameRef = useRef();
    const emailRef = useRef();

    const addUserHandle = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };
        fetch('', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newUser)
        })

        e.preventDefault();
    }


    return (
        <div>
            <h2>Please Add an User</h2>
            <form onSubmit={addUserHandle}>
                <input type="text" name="" id="" ref={nameRef} />
                <input type="email" name="" id="" ref={emailRef} />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;