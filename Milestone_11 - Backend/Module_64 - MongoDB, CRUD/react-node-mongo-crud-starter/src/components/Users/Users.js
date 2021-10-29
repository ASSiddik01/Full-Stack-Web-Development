import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    // Delete user
    const deleteHandler = id => {
        const proceed = window.confirm('Are you sure, Delete your account');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainUsers = users.filter(user => user._id !== id);
                    setUsers(remainUsers);
            }
        })
        }
    }

    return (
        <div>
            <h2> Users {users.length} </h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    > {user.name} :: {user.email}
                        <button>Update</button>
                        <button     onClick={()=>deleteHandler(user._id)} >X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;