import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageServices = () => {
    const [services, setSetvices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setSetvices(data));
    }, [])

    const deletehandle = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully Deleted')
                    const remain = services.filter(service => service._id !== id);
                    setSetvices(remain);
                }

            });

    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id} >
                    <h3>{service.name} </h3>
                    <button onClick={() => deletehandle(service._id)} >Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;