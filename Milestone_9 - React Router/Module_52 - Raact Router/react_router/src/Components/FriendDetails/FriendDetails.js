import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({})
    const { name, phone, website, company } = friend;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>Friend details of: {friendId}</h2>
            <h4>{name}</h4>
            <p>{phone} </p>
            <p>{website} </p>
            <p>{company?.name} </p>
        </div>
    );
};

export default FriendDetails;