import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    const nameChangeHandle = e => {
        const updateName = e.target.value;
        const updatedUser = { name: updateName, email: user.email };
        setUser(updatedUser);
    }

    const emailChangeHandle = e => {
        const updateEmail = e.target.value;
        const updatedUser = { name: user.name, email: updateEmail };
        setUser(updatedUser);
    }

    const updateUserHandle = e => {
        
    }

    return (
        <div>
            <h2>Update {user.name} $ {user.email} </h2>
            {/* console.log({user}); */}
            <p> {id} </p>
            <form onSubmit={updateUserHandle} >
                <input type="text" name="name" id="name" value={user.name || ''} onChange={nameChangeHandle} />
                <input type="email" name="email" id="email" value={user.email || ''} onChange={emailChangeHandle} />
                <input type="submit" value="Update Profile" />
            </form>
        </div>
    );
};

export default UpdateUser;